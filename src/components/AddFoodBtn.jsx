import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const AddFoodBtn = () => {
  return (
    <Button>
      <Link to="/tracking/diary/add_food">Add Food</Link>
    </Button>
  );
};

export default AddFoodBtn;
