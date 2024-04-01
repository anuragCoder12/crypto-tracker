const Hero = () => {
  const curencies = [
    {
      name: "Bitcoin",
    },
    {
      name: "Etherium",
    },
    {
      name: "Tether",
    },
    {
      name: "BNB",
    },
  ];
  return (
    <div>
      <div
        name="home"
        className="w-[100%] h-[100vh] flex  items-center justify-center  "
      >
        <div className="flex-col items-center justify-center">
          <div className="flex  justify-between ">
            <img
              className="hidden lg:block animate-bounce"
              src="src\assets\ethereum.c6cffe78f0c6abc85da9.png.png"
              alt="img"
            />

            <div className="justify-center flex items-center">
              <h1 className="text-white text-4xl font-bold font-space lg:text-7xl">
                TRACK AND <br className=" block lg:hidden " /> TRADE
              </h1>
            </div>
            <img
              className="hidden lg:block animate-bounce"
              src="src\assets\bitcoin.e146d46fb598ae0d8f43.png.png"
              alt="img"
            />
          </div>
          <h1 className="text-transparent text-5xl font-bold font-space bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text lg:text-8xl">
            CRYPTO <br className=" block lg:hidden " /> CURENCIES
          </h1>
          <button className=" mt-8 w-[200px] bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] rounded-[30px]  text-xl font-bold font-space text-white h-[60px] lg:hidden">
            See Price
          </button>
          <div className=" hidden lg:flex items-center justify-around mt-[150px] gap-[30px]">
            {curencies.map((data, index) => (
              <div className="cursor-pointer" key={index}>
                <p className="text-white text-xl font-bold font-space">
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
