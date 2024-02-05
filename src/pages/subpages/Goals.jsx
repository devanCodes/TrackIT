import React from "react";
import {
  Flex,
  Link,
  Heading,
  Text,
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

const Goals = () => {
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
        Macro Goals
      </Heading>
      <TableContainer mx="auto" mt={5} width="80%" backgroundColor="white">
        <Table variant="striped">
          <TableCaption>Daily Nutritional Goals</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric fontWeight="bold">Calories (kcal)</Th>
              <Th isNumeric fontWeight="bold">Protein (g)</Th>
              <Th isNumeric fontWeight="bold">Carbs (g)</Th>
              <Th isNumeric fontWeight="bold">Fat (g)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Text
        fontSize={["md", "md", "lg"]}
        fontWeight="semibold"
        mx={100}
        mt={5}
        align="center"
      >
        Not sure where to start? Check out our{" "}
        <Link fontWeight="semibold" color="teal" href="/tracking/calculator">
          H-B Calculator
        </Link>{" "}
        page to determine your caloric maintenance and macro recommendations!
      </Text>
      <Footer />
    </Flex>
  );
};

export default Goals;
