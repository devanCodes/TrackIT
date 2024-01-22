import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Heading, Text, Box, Input } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
// THIS PAGE NEEDS TO CONDITIONALLY RENDER A BOX AFTER A OOD IS SELECTED
// THAT INCLUDES THE AMOUNT AND UNITS
// WORK WITH MYFITNESSPAL
// HOOK UP API HERE

const AddFood = () => {
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
        Search and Add Food
      </Heading>
      <Text
        fontSize={["md", "md", "lg"]}
        fontWeight="semibold"
        mx={100}
        mt={5}
        align="center"
      >
        Add food to (meal name that will be dynamic)
      </Text>
      <Box mx="auto" width="90%" align="center">
        <Input variant="flushed" width="50%" mr={2}></Input>
        <Button maxWidth={200}>
          Search
        </Button>
      </Box>
      <Box maxWidth={200} mx="auto" pt={5}>
        <Link to="/tracking/diary">
          <Button mr={2}>Cancel</Button>
        </Link>
        <Link to="/tracking/diary">
          <Button>Add Food</Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default AddFood;
