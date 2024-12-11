import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllWork from "./pages/AllWork";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#17a2b8] mt-19">
        <div className="mx-4 sm:mx-[4%] bg-white ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allwork" element={<AllWork />} />
            <Route path="/allworkers/:speciality" element={<AllWork />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
