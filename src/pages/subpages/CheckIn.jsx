import React from "react";
import {
  Button,
  Flex,
  Heading,
  Text,
  Box,
  Link,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputRightAddon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// NEED TO APPEND DAILY WEIGHT TO THE TABLE 
// MUST BE SIGNED IN TO USE THIS FEATURE
// ONLY ALLOW 1 INPUT IN FOR THE WEIGHT PER DAY


const CheckIn = () => {
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
        Check-In
      </Heading>
      <Text
        fontSize={["md", "md", "lg"]}
        fontWeight="semibold"
        mx={100}
        mt={5}
        align="center"
      >
        Enter today's weight:
      </Text>
      <Box mx="auto" mt={2}>
        <InputGroup>
          <NumberInput min={1} backgroundColor="white">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <InputRightAddon backgroundColor="white">lbs</InputRightAddon>
        </InputGroup>
      </Box>
      <Box maxWidth={250} mx="auto" pt={5}>
        <Link to="/tracking/diary">
          <Button mr={2}>Reset</Button>
        </Link>
        <Link to="/tracking/diary">
          <Button>Add Weight</Button>
        </Link>
      </Box>
      <TableContainer backgroundColor="white" mx="auto" mt={5} width={["80%", "65%", "50%", "35%"]}>
        <Table variant="striped">
          <TableCaption>Weight History</TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th isNumeric>Weight (lbs)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Footer />
    </Flex>
  );
};

export default CheckIn;
