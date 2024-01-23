import React, { useState, useEffect, useRef } from "react";
import AddFoodBtn from "../../components/AddFoodBtn";
import QuickAddBtn from "../../components/QuickAddBtn";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Flex,
  Heading,
  Text,
  Box,
  Divider,
  Button,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import ReactDatePicker from "react-datepicker";

const FoodDiary = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const datePickerRef = useRef(null);

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run effect only once on mount

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

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
        mb={4}
      >
        Food Diary
      </Heading>
      <Text fontSize={["md", "md", "lg"]} fontWeight="semibold" mx={100} align="center">
        Food Diary For: {formattedDate}
        {/* <Button ml={2} onClick={() => datePickerRef.current.setOpen(true)}>
          <CalendarIcon />
        </Button>
        <ReactDatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          ref={datePickerRef}
          popperContainer={({ children }) => children}
        /> */}
      </Text>
      <Box mx="auto" width="85%" py={5}>
        <Text fontSize={["md", "md", "lg"]}>Breakfast</Text>
        <AddFoodBtn />
        <QuickAddBtn />
        <Divider mt={1} />
      </Box>
      <Box mx="auto" width="85%" pb={5}>
        <Text fontSize={["md", "md", "lg"]}>Lunch</Text>
        <AddFoodBtn />
        <QuickAddBtn />
        <Divider mt={1} />
      </Box>
      <Box mx="auto" width="85%" pb={5}>
        <Text fontSize={["md", "md", "lg"]}>Dinner</Text>
        <AddFoodBtn />
        <QuickAddBtn />
        <Divider mt={1} />
      </Box>
      <Box mx="auto" width="85%" pb={5}>
        <Text fontSize={["md", "md", "lg"]}>Snacks</Text>
        <AddFoodBtn />
        <QuickAddBtn />
        <Divider mt={1} />
      </Box>
      <TableContainer mx="auto" width="75%" backgroundColor="white">
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td fontWeight="extrabold">Totals</Td>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
              <Td isNumeric>(make dynamic)</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th isNumeric fontWeight="bold">Calories (kcal)</Th>
              <Th isNumeric fontWeight="bold">Protein (g)</Th>
              <Th isNumeric fontWeight="bold">Carbs (g)</Th>
              <Th isNumeric fontWeight="bold">Fat (g)</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Footer />
    </Flex>
  );
};

export default FoodDiary;
