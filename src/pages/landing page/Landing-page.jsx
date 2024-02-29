import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

// Define the LandingPage component
const LandingPage = () => {
  return (
    <div className="bg-gradient-to-t from-[#0F051D] to-[#130749] w-full h-[100vh]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;
