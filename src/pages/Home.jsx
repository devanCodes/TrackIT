import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <p>
        Welcome to TrackIT! - Your personalized hub for tracking daily caloric
        intake effortlessly. With our user-friendly interface and comprehensive
        food database powered by APIs, you can easily select and log your meals,
        keeping a close eye on your nutrition. Whether you're on a fitness
        journey or simply aiming for a healthier lifestyle, TrackIt! empowers
        you to make informed choices and stay accountable. Start your wellness
        adventure today with TrackIt! - where managing your daily nutrition is
        as easy as a few clicks.
      </p>
      <a href="/tracking">Start Tracking!</a>
    </>
  );
}

export default Home;
