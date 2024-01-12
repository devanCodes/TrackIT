import React from "react";
import { Button } from '@chakra-ui/react'

const CheckIn = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Check-In SubPage</h1>
      <h2>Enter today's weight:</h2>
      <label htmlFor="">
        <input type="text" />
        lbs
      </label>
      <Button>Add Weight</Button>
      <div>Weight History (Table Log)</div>
    </>
  );
};

export default CheckIn;
