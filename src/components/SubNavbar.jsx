import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <nav>
      <Link to="/tracking">Daily Summary</Link>
      <Link to="/tracking/diary">Food Diary</Link>
      <Link to="/tracking/checkin">Check-In</Link>
      <Link to="/tracking/goals">Goals</Link>
      <Link to="/tracking/profile">Profile</Link>
    </nav>
  );
};

export default SubNavbar;
