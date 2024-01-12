import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const QuickAdd = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <h1>This is the QuickAdd page</h1>
      <div>
        Meal Name: (dropdown box) Calories: (text box w/ units of kcal)
        <Button>
          <Link to="/tracking/diary">Cancel</Link>
        </Button>
        <Button>
          <Link to="/tracking/diary">Add To Diary</Link>
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default QuickAdd;
