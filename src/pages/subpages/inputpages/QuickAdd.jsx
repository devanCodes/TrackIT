import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const QuickAdd = () => {
  return (
    <>
      <SubNavbar />
      <h1>This is the QuickAdd page</h1>
      <div>
        Meal Name: (dropdown box)
        Calories: (text box w/ units of kcal)
        <Button><Link to="/tracking/diary">Cancel</Link></Button>
        <Button><Link to="/tracking/diary">Add To Diary</Link></Button>
      </div>
    </>
  );
};

export default QuickAdd;