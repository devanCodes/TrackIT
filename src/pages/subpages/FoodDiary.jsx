import React from "react";
import AddFoodBtn from "../../components/AddFoodBtn";
import QuickAddBtn from "../../components/QuickAddBtn";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FoodDiary = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <h1>Food Diary SubPage</h1>
      <h2>
        Food Diary For: <div>(Use Pre-Built Calendar w/ Icon)</div>
      </h2>
      <br></br>
      <div>
        <h3>Breakfast</h3>
        <AddFoodBtn />
        <QuickAddBtn />
      </div>
      <div>
        <h3>Lunch</h3>
        <AddFoodBtn />
        <QuickAddBtn />
      </div>
      <div>
        <h3>Dinner</h3>
        <AddFoodBtn />
        <QuickAddBtn />
      </div>
      <div>
        <h3>Snacks</h3>
        <AddFoodBtn />
        <QuickAddBtn />
      </div>
      <div>
        (This will be a table that computes the amount of calories consumed,
        daily goal, and amount of calories remaining)
      </div>
      <Footer />
    </>
  );
};

export default FoodDiary;
