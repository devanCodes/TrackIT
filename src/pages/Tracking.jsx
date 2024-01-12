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
} from "@chakra-ui/react";

const Tracking = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <h1>Tracking Page (Daily Summary SubPage)</h1>
      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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
      <Progress hasStripe value={15} />
      <Button>
        <Link to="/tracking/diary">Add Food</Link>
      </Button>
      <Footer />
    </>
  );
};

export default Tracking;
