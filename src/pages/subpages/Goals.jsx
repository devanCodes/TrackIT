import React from "react";
import SubNavbar from "../../components/SubNavbar";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Goals = () => {
  return (
    <>
      <SubNavbar />
      <h1>Goals SubPage</h1>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Daily Nutritional Goals</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Calories</Th>
              <Th isNumeric>Protein</Th>
              <Th isNumeric>Carbohydrates</Th>
              <Th isNumeric>Fat</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic) g</Td>
              <Td isNumeric>(make dynamic) g</Td>
              <Td isNumeric>(make dynamic) g</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <br></br>
      <p>Not sure where to start? Check out our <Link to="/tracking/profile">Profile</ Link> sub-page to determine your caloric maintenance!</p>
    </>
  );
};

export default Goals;
