const ChooseUs = () => {
  const left = [
    {
      h2: "CONNECT YOUR",
      h2break: "WALLET",
      p: "Use Trust Wallet, Metamask",
      pbreak: "or to connect to the app.",
    },
    {
      h2: "SELECT YOUR",
      h2break: "QUANTITY",
      p: "Upload your crypto and set a",
      pbreak: "title, description and price.",
    },
    {
      h2: "CONFIRM",
      h2break: "TRANSACTION",
      p: "Earn by selling your crypto on",
      pbreak: "our marketplace.",
    },
  ];

  return (
    <div
      name="choose-us"
      className="w-full h-full lg:h-[1007px] bg-[#0F051D]  "
    >
      <div className="w-full h-[25vh] flex  items-center justify-center">
        <h2 className="text-white flex items-center text-5xl  lg:text-6xl font-bold font-space">
          WHY{" "}
          <span className="text-transparent bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text">
            {" "}
            <br className=" block lg:hidden " /> CHOOSE{" "}
            <br className=" block lg:hidden " /> US{" "}
          </span>
        </h2>
      </div>
      <div className=" flex-col flex items-center justify-center lg:flex-row lg:gap-[90px]  ">
        <div className="">
          {left.map((data, i) => (
            <div
              className="lg:w-[403.33px] w-[350px] h-[176px] bg-white/10  backdrop-blur-0 border rounded-[10px] flex items-center justify-center gap-7 cursor-pointer hover:translate-y-[-10px] transition-transform duration-200 ease-in-out mt-6"
              key={i}
            >
              <div className="w-[58.41px] h-[60px] rounded-[20px] bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] flex items-center justify-center">
                i
              </div>
              <div className="flex-col ">
                <h2 className="text-white font-bold font-space text-xl ">
                  {data.h2}
                  <br />
                  {data.h2break}
                </h2>
                <p className="text-white font-space text-md ">
                  {data.p} <br /> {data.pbreak}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <img src="" alt="hand img" className="hidden lg:block" />
        </div>

        <div className="flex items-center justify-center ">
          <div className="">
            {left.map((data, i) => (
              <div
                className="lg:w-[403.33px] w-[350px] h-[176px] bg-white/10  backdrop-blur-0 border rounded-[10px] flex items-center justify-center gap-7 cursor-pointer hover:translate-y-[-10px] transition-transform duration-200 ease-in-out mt-6"
                key={i}
              >
                <div className="w-[58.41px] h-[60px] rounded-[20px] bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] flex items-center justify-center ">
                  i
                </div>
                <div className="flex-col ">
                  <h2 className="text-white font-bold font-space text-xl ">
                    {data.h2}
                    <br />
                    {data.h2break}
                  </h2>
                  <p className="text-white font-space text-md ">
                    {data.p} <br /> {data.pbreak}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
