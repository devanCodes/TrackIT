// import { Heading } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tracking from "./pages/Tracking";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodDiary from "./pages/subpages/FoodDiary";
import CheckIn from "./pages/subpages/CheckIn";
import Goals from "./pages/subpages/Goals";
import Calculator from "./pages/subpages/Calculator";
import AddFood from "./pages/subpages/inputpages/AddFood";
import QuickAdd from "./pages/subpages/inputpages/QuickAdd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/tracking/diary" element={<FoodDiary />} />
          <Route path="/tracking/checkin" element={<CheckIn />} />
          <Route path="/tracking/goals" element={<Goals />} />
          <Route path="/tracking/calculator" element={<Calculator />} />
          <Route path="/tracking/diary/add_food" element={<AddFood />} />
          <Route path="/tracking/diary/quick_add" element={<QuickAdd />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
