import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bgImage.jpg";

const Home = () => {
  return (
    <Flex
      minHeight="100vh"
      w="100%"
      direction="column"
      bgImage={bgImage}
      bgSize="cover"
    >
      <Navbar />
      <Text fontSize={["3xl", "3xl", "6xl"]} fontWeight="extrabold" pt={70} mt="auto" mx="auto">
        Welcome to TrackIT!
      </Text>
      <Text fontSize={["lg", "lg", "2xl"]} mx="auto" px={250} fontWeight="bold" align="center">
        Your personalized hub for tracking daily caloric intake effortlessly.
        With our user-friendly interface and comprehensive food database powered
        by APIs, you can easily select and log your meals, keeping a close eye
        on your nutrition. Whether you're on a fitness journey or simply aiming
        for a healthier lifestyle, TrackIt! empowers you to make informed
        choices and stay accountable. Start your wellness adventure today with
        TrackIt! - where managing your daily nutrition is as easy as a few
        clicks.
      </Text>
      <Box maxWidth={200} mx="auto" pt={5}>
        <Link to="/tracking">
          <Button size="lg">Start Tracking!</Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Home;
