import React from "react";
import { Button } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CheckIn = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <h1>Check-In SubPage</h1>
      <h2>Enter today's weight:</h2>
      <label htmlFor="">
        <input type="text" />
        lbs
      </label>
      <Button>Add Weight</Button>
      <div>Weight History (Table Log)</div>
      <Footer />
    </>
  );
};

export default CheckIn;
