import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const AddFoodBtn = () => {
  return (
    <Link to="/tracking/diary/add_food">
      <Button mr={2}>Add Food</Button>
    </Link>
  );
};

export default AddFoodBtn;
