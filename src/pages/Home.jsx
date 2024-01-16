import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bgImage.jpg";

const Home = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      direction="column"
      bgImage={bgImage}
      bgSize="cover"
    >
      <Navbar />
      <Text fontSize={["3xl", "3xl", "6xl"]} fontWeight="extrabold" mt={50}>
        Welcome to TrackIT!
      </Text>
      <Text fontSize={["lg", "lg", "2xl"]} mx={100} fontWeight="bold">
        Your personalized hub for tracking daily caloric intake effortlessly.
        With our user-friendly interface and comprehensive food database powered
        by APIs, you can easily select and log your meals, keeping a close eye
        on your nutrition. Whether you're on a fitness journey or simply aiming
        for a healthier lifestyle, TrackIt! empowers you to make informed
        choices and stay accountable. Start your wellness adventure today with
        TrackIt! - where managing your daily nutrition is as easy as a few
        clicks.
      </Text>
      <Box>
        <Link to="/tracking" maxWidth={200} mx="auto" my={15}>
          <Button size="lg">Start Tracking!</Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Home;
