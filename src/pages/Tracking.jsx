import React from "react";
import SubNavbar from "../components/SubNavbar";
import { Link } from "react-router-dom";

const Tracking = () => {
  return (
    <>
      <SubNavbar />
      <h1>Tracking Page (Daily Summary SubPage)</h1>
      <div>
        This will be a table that displays the amount of calories one has
        remaining for the day
        <Link to="/tracking/diary">Add Food</Link>
      </div>
    </>
  );
};

export default Tracking;
