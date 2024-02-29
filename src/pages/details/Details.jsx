import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

const Details = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [price, setPrice] = useState([]); 

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

        //extracting price 
        setPrice([item.price]);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 1000); // Fetch data every minute

    return () => clearInterval(intervalId);
  }, [id, price]);

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
                    labels: ["A", "B", "C", "D", "E","f","g","h"], 
                    datasets: [
                      {
                        label: "Income",
                        data: price, 
                        backgroundColor: "#FF00EA", 
                        borderColor: "#FF00EA",
                        borderWidth: 2,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          )}
    </div>
  );
};

export default Details;
