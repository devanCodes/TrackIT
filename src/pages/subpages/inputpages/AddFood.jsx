import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'
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
        <Button>Search</Button>
      </div>
      <Button><Link to="/tracking/diary">Cancel</Link></Button>
      <Button><Link to="/tracking/diary">Add to (meal name that will be dynamic)</Link></Button>
    </>
  );
};

export default AddFood;
