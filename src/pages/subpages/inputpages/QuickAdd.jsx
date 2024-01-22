import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// ALERT MESSAGE PROHIBITING USER FROM SUBMITTING ANYTHING UNDER 1 CALORIE


const QuickAdd = () => {
  return (
    <Flex
      w="100%"
      minHeight="100vh"
      direction="column"
      backgroundColor="rgba(255,205,84,255)"
      bgSize="cover"
    >
      <Navbar />
      <Heading
        fontSize={["3xl", "3xl", "6xl"]}
        fontWeight="extrabold"
        pt={75}
        mt="auto"
        mx="auto"
      >
        Quick Add Calories
      </Heading>
      <Text
        fontSize={["md", "md", "lg"]}
        fontWeight="semibold"
        mx={100}
        mt={5}
        align="center"
      >
        Quick Add to (meal name that will be dynamic)
      </Text>
      <NumberInput min={1} mx="auto" backgroundColor="white" rounded="lg" mt={2}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Box maxWidth={200} mx="auto" pt={5}>
        <Link to="/tracking/diary">
          <Button mr={2}>Cancel</Button>
        </Link>
        <Link to="/tracking/diary">
          <Button>Add</Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default QuickAdd;
