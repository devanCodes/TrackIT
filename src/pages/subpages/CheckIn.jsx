import React from "react";
import SubNavbar from "../../components/SubNavbar";

const CheckIn = () => {
  return (
    <>
      <SubNavbar />
      <h1>Check-In SubPage</h1>
      <h2>Enter today's weight:</h2>
      <label htmlFor="">
        <input type="text" />
        lbs
      </label>
      <button>Add Weight</button>
      <div>Weight History (Table Log)</div>
    </>
  );
};

export default CheckIn;
