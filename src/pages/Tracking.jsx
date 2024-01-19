import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Progress,
  Button,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";

// NEED TO CENTER-ALIGN TABLE

const Tracking = () => {
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
        Daily Summary
      </Heading>
      <TableContainer mx="auto" width="80%" backgroundColor="white" mb={5} mt={5}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric>Calories Remaining</Th>
              <Th isNumeric>Goal</Th>
              <Th isNumeric>Calories Consumed</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Progress hasStripe value={15} mx="auto" width="80%" />
      <Box maxWidth={200} mx="auto" pt={5}>
        <Link to="/tracking/diary">
          <Button size="lg">Add Food</Button>
        </Link>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Tracking;
