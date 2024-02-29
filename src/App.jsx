import './App.css'
import Details from "./pages/details/Details";
import LandingPage from "./pages/landing page/Landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </Router>
    
   
  )
}