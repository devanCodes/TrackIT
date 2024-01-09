import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Link } from "react-router-dom";

const QuickAdd = () => {
  return (
    <>
      <SubNavbar />
      <h1>This is the QuickAdd page</h1>
      <div>
        Meal Name: (dropdown box)
        Calories: (text box w/ units of kcal)
        <button><Link to="/tracking/diary">Cancel</Link></button>
        <button><Link to="/tracking/diary">Add To Diary</Link></button>
      </div>
    </>
  );
};

export default QuickAdd;