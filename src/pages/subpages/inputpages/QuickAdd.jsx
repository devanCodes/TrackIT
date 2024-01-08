import React from "react";
import SubNavbar from "../../../components/SubNavbar";

const QuickAdd = () => {
  return (
    <>
      <SubNavbar />
      <h1>This is the QuickAdd page</h1>
      <div>
        Meal Name: (dropdown box)
        Calories: (text box w/ units of kcal)
        <button>Cancel</button>
        <button>Add To Diary</button>
      </div>
    </>
  );
};

export default QuickAdd;