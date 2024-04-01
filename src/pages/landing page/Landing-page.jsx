import ChooseUs from "../chooseUs/chooseUs";
import Market from "../market/Marker";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Headroom from "react-headroom";
// Define the LandingPage component
const LandingPage = () => {
  return (
    <>
    <div className="bg-gradient-to-t from-[#0F051D] to-[#130749] w-full h-[100vh]">
      <Headroom>
      <Navbar />
      </Headroom>
      <Hero />
    </div>
    <Market/>
    <ChooseUs/>
    </>
  );
};

export default LandingPage;
