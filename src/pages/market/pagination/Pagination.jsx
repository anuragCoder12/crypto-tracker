import { useState } from "react";

const Pagination = (props) => {
  const [active, setActive] = useState(0);
  const { coin, itemList, setCurrentPage } = props;

  // Calculating the total number of pages
  const totalPages = Math.ceil(coin.length / itemList);

  // Creating an array of page numbers
  const numberOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    numberOfPages.push(i);
  }

  // Handling the page change
  const changePage = (page) => {
    if (typeof setCurrentPage === "function") {
      setCurrentPage(page);
    } else {
      console.log("setCurrentPage is not a function");
    }
    // Scroll to the top of the page
    setActive(page - 1);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div className="flex gap-[10px]">
      {numberOfPages.map((page, i) => (
        <div
          id={page}
          onClick={() => changePage(page)}
          className={`w-[50px] h-[50px] rounded-full mt-5 flex justify-center items-center cursor-pointer ${
            active === i
              ? "bg-gradient-to-tr from-[#2600FC] to-[#FF00EA]"
              : "bg-white"
          } hover:translate-y-[-10px] transition-transform duration-300 ease-in-out`}
          key={i}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
