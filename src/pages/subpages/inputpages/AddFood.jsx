import React from "react";
import SubNavbar from "../../../components/SubNavbar";
// THIS PAGE NEEDS TO CONDITIONALLY RENDER A BOX AFTER A OOD IS SELECTED
// THAT INCLUDES THE AMOUNT AND UNITS
// WORK WITH MYFITNESSPAL 

const AddFood = () => {
  return (
    <>
      <SubNavbar />
      <h1>This is the AddFood page</h1>
      <h1>Add food to (meal name that will be dynamic)</h1>
      <div>
        Search Bar that uses API
        <button>Search</button>
      </div>
      <button>Add to (meal name that will be dynamic)</button>
    </>
  );
};

export default AddFood;
