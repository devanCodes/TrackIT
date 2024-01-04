import React from "react";
import { Link } from "react-router-dom";

const AddFoodBtn = () => {
  return (
    <button>
      <Link to="/tracking/diary/add_food">Add Food</Link>
    </button>
  );
};

export default AddFoodBtn;
