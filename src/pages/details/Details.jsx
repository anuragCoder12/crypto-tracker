import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chart, LinearScale, LineElement, PointElement, CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

Chart.register(
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale
);

const Details = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState([]);
  const [minutes, setMinutes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://openapiv1.coinstats.app/coins?limit=50&currency=INR",
          {
            headers: {
              "X-API-KEY": "/6V7ysN+Zn04j6T8HwxUVYBs+xRU2eEb2QZcS17/3Zc=",
            },
          }
        );

        const item = response.data.result.find((coin) => coin.id === id);
        setCoin([item]);
        setLoading(false);

        // Extracting price
        setPrice((prevPrices) => [...prevPrices, item.price]);

        // Get minutes of the hour
        const minutesArray = Array.from({ length: 60 }, (_, i) => i);
        setMinutes(minutesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000); // Fetch data every minute

    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <div className="bg-gradient-to-tr from-[#0F051D] to-[#130749] w-full h-[100vh]">
      {loading ? (
        <div className="flex items-center justify-center h-[400px]">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#FF00EA]"></div>
        </div>
      ) : (
        <div className="w-full h-[100vh] flex items-center justify-center lg:flex ">
          <div className="w-[375px] h-[328px] border-r-4 border-white rounded-[3px] flex items-center justify-center">
            {coin.map((item, i) => (
              <div className="flex flex-col items-center gap-[20px]" key={i}>
                <img src={item.icon} alt="" className="w-[150px] h-[150px]" />
                <h3 className="text-2xl font-bold font-space text-white">{item.name}</h3>
                <p className="text-2xl font-bold font-space text-white">{item.price.toFixed(2)}</p>
                <p className={`text-2xl ${item.priceChange1d >= 0 ? "text-green-500" : "text-red-600"}`}>
                  {item.priceChange1d > 0 ? `+${item.priceChange1d}%` : `${item.priceChange1d}%`}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[1000px] h-[500px] flex items-center justify-start">
            {/* Setting the graph */}
            <Line
              data={{
                labels: minutes,
                datasets: [
                  {
                    label: "Price",
                    data: price,
                    backgroundColor: "#FF00EA",
                    borderColor: "#FF00EA",
                    tension: 0.5, // Set tension for curving the line
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    title: {
                      display: true,
                      text: "Price",
                      color: "#FFFFFF",
                      font: {
                        size: 16,
                      },
                    },
                    ticks: {
                      color: "#FFFFFF",
                      font: {
                        size: 14,
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
