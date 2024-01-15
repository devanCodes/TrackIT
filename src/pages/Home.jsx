import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Flex height="100vh" direction="column">
        <Navbar />
        <Text fontSize="6xl" fontWeight="bold" mt={50}>
          Welcome to TrackIT!
        </Text>
        <Text fontSize="2xl" mx={100}>
          Your personalized hub for tracking daily caloric intake effortlessly.
          With our user-friendly interface and comprehensive food database
          powered by APIs, you can easily select and log your meals, keeping a
          close eye on your nutrition. Whether you're on a fitness journey or
          simply aiming for a healthier lifestyle, TrackIt! empowers you to make
          informed choices and stay accountable. Start your wellness adventure
          today with TrackIt! - where managing your daily nutrition is as easy
          as a few clicks.
        </Text>
        <Link to="/tracking">
          <Button size="lg" maxWidth={200} mx="auto" my={15}>
            Start Tracking!
          </Button>
        </Link>
        <Footer />
      </Flex>
    </>
  );
};

export default Home;
