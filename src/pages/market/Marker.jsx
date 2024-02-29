import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./pagination/Pagination";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading state

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
        console.log(response)
        setCoin(response.data.result);
        // console.log(coin)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000); // Fetch data every minute

    return () => clearInterval(intervalId);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemList = 10;

  let lastIndex = Math.min(currentPage * itemList, coin.length);
  let firstIndex = Math.max(lastIndex - itemList, 0);
  let showItems = coin.slice(firstIndex, lastIndex);

  const navigate = useNavigate();

  return (
    <div
      name="market"
      className="w-full flex flex-col h-[1355px] bg-[#0F051D] items-center top-0"
    >
      <div className="w-[1250px] flex items-center justify-between">
        <h2 className="text-white text-5xl font-bold font-space ">
          Market Update
        </h2>
        <input
          className="w-[200px] h-[30px] rounded-full"
          type="search"
          placeholder="Search..."
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-[400px]">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#FF00EA]"></div>
        </div>
      ) : (
        <table className="w-[1250px] h-auto mt-[30px]">
          <thead className="w-full h-[58px] bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] ">
            <tr>
              <th></th>
              <th className="text-white text-xl font-space">Coin</th>
              <th className="text-white text-xl font-space">Price</th>
              <th className="text-white text-xl font-space">24Change</th>
              <th className="text-white text-xl font-space">Market Cap</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {coin &&
              showItems.map((val, index) => (
                <tr
                  onClick={() => navigate(`/details/${val.id}`)}
                  className="w-full h-[101px] bg-[#0F051D] border-b-2 cursor-pointer border-white hover:translate-y-[-5px] transition-transform duration-200 ease-in-out hover:bg-[#130749] "
                  key={index}
                >
                  <td>
                    <img
                      className="w-[50px] h-[50px] rounded-full "
                      src={val.icon}
                      alt=""
                      loading="lazy"
                    />
                  </td>
                  <td className="text-white text-lg font-space">{val.name}</td>
                  <td className="text-white text-lg font-space">
                    {val.price.toFixed(2)}
                  </td>
                  <td
                    className={`text-lg font-space ${
                      val.priceChange1d >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {val.priceChange1d > 0
                      ? `+${val.priceChange1d.toFixed(2)}%`
                      : `${val.priceChange1d.toFixed(2)}%`}
                  </td>
                  <td className="text-white text-lg font-space">
                    {val.marketCap.toFixed(2)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      {coin.length > 0 && !loading && (
        <Pagination
          coin={coin}
          itemList={itemList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Market;
