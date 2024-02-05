import React, { useState } from "react";
import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Select,
  Input,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// MIGHT ADD INCREMENT AND DECREMENT STEPPER TO NUMBER INPUTS
// Also need to allow "Set As Goal" buttons to be dynamically updated Goals in Goals subpage

const Calculator = () => {
  // intializing state variables for user inputs; the initial value for gender is 'male', for weightUnit is 'kg', for heightUnit is 'm', and for activityLevel is 'sedentary'; the remaining initial values are empty strings
  // all of these will be used to store the user's inputs for each category
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightUnit, setHeightUnit] = useState("m");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [caloricMaintenance, setCaloricMaintenance] = useState("");

  // define calculation logic based on the H-B formula
  // taking the formula and user inputs
  const calculateCaloricMaintenance = () => {
    // validate input values
    if (!age || !weight || !heightFeet || !heightInches) {
      alert("Please fill in all required fields."); // display an alert if any required field is empty
      return;
    }

    // additional validation based on specific criteria
    let errorMessage = null;

    switch (true) {
      case age < 1:
        errorMessage = "Age must be at least 1.";
        break;
      case weight < 1 && weightUnit === "kg":
        errorMessage = "Weight must be at least 1 kg.";
        break;
      case weight < 1 && weightUnit === "lb":
        errorMessage = "Weight must be at least 1 lb.";
        break;
      case heightFeet < 1 && heightUnit === "ft":
        errorMessage = "Height must be at least 1 ft.";
        break;
      case heightFeet < 1 && heightUnit === "m":
        errorMessage = "Height must be at least 1 m";
        break;
      case heightInches > 11 && heightUnit === "ft":
        errorMessage = "Value for inches should be between 0 and 11";
        break;
      default:
        // no specific error, proceed with calculation
        break;
    }

    if (errorMessage) {
      alert(errorMessage); // display the specific error message
      return;
    }

    let bmr = 0;

    // define separate functions for male and female equations
    const calculateBMRForMale = () => {
      const weightInKg =
        weightUnit === "kg"
          ? parseFloat(weight)
          : parseFloat(weight) * 0.453592; // if weightUnit is not kg (meaning it will be lbs), then we have to convert it to kg's

      let heightInCm = 0;
      if (heightUnit === "m") {
        // If height is in meters, convert meters to centimeters
        heightInCm = parseFloat(heightFeet) * 100 + parseFloat(heightInches);
      } else {
        // If height is in feet/inches, convert feet and inches to centimeters
        heightInCm =
          parseFloat(heightFeet) * 30.48 + parseFloat(heightInches) * 2.54;
      }

      return (
        // final BMR calculation for males
        66.5 + 13.75 * weightInKg + 5.003 * heightInCm - 6.755 * parseFloat(age)
      );
    };

    const calculateBMRForFemale = () => {
      const weightInKg =
        weightUnit === "kg"
          ? parseFloat(weight)
          : parseFloat(weight) * 0.453592; // if weightUnit is not kg (meaning it will be lbs), then we have to convert it to kg's

      let heightInCm = 0;
      if (heightUnit === "m") {
        // If height is in meters, convert meters to centimeters
        heightInCm = parseFloat(heightFeet) * 100 + parseFloat(heightInches);
      } else {
        // If height is in feet/inches, convert feet and inches to centimeters
        heightInCm =
          parseFloat(heightFeet) * 30.48 + parseFloat(heightInches) * 2.54;
      }

      return (
        // final BMR calculation for females
        655.1 + 9.563 * weightInKg + 1.85 * heightInCm - 4.676 * parseFloat(age)
      );
    };

    // call appropriate function based on gender
    if (gender === "male") {
      bmr = calculateBMRForMale();
    } else {
      bmr = calculateBMRForFemale();
    }

    // applying activity level multipliers to BMR to get caloric maintenance
    const activiyMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };

    const maintenance = bmr * activiyMultipliers[activityLevel];

    // update state variable for displaying the calculated result; 'toFixed(0)' is used to ensure that the result is a whole number
    setCaloricMaintenance(maintenance.toFixed(0));
  };

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
        fontSize={["3xl", "3xl", "5xl", "6xl"]}
        fontWeight="extrabold"
        pt={75}
        mt="auto"
        mx="auto"
        mb={4}
      >
        Harris-Benedict Calculator
      </Heading>
      <Text
        fontSize={["md", "md", "lg"]}
        fontWeight="semibold"
        mx={100}
        align="center"
        mb={2}
      >
        Calculate your caloric maintenance with the Harris-Benedict calculator
        by filling out the form below!
      </Text>
      {/* JSX structure that includes a form for user inputs and a button to
      trigger the calculation // input fields are controlled components, meaning
      their values are controlled by the state variables, and their changes are
      tracked using the 'onChange' event handlers // some input fields have
      specific validation logic, such as preventing non-digit characters and
      limiting the input range */}
      <Flex direction="column" mx="auto" width={["90%", "75%", "55%", "42%"]}>
        <Flex>
          <FormLabel width="40%">
            Gender
            <Select
              backgroundColor="white"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormLabel>
          <FormLabel width="20%">
            Age
            <Input
              backgroundColor="white"
              type="number"
              value={age}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                if (newValue.length === 1) {
                  setAge(newValue); // Keep single digits including zero
                } else {
                  setAge(newValue.replace(/^0+/, "")); // Remove leading zeros
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "." || e.key === "e") {
                  e.preventDefault(); // Prevent entering period or exponential notation
                }
              }}
              min="1"
            />
          </FormLabel>
          <FormLabel>
            Weight
            <Flex>
              <Input
                backgroundColor="white"
                type="number"
                value={weight}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                  if (newValue.length === 1) {
                    setWeight(newValue); // Keep single digits including zero
                  } else {
                    setWeight(newValue.replace(/^0+/, "")); // Remove leading zeros
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "." || e.key === "e") {
                    e.preventDefault(); // Prevent entering period or exponential notation
                  }
                }}
                min="1"
              />
              <Select
                backgroundColor="white"
                pl={1}
                width="60%"
                id="weight"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </Select>
            </Flex>
          </FormLabel>
        </Flex>
        <Flex>
          <FormLabel>
            Height
            {heightUnit === "ft" ? (
              <Flex>
                <Input
                  backgroundColor="white"
                  width="40%"
                  type="number"
                  value={heightFeet}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                    if (newValue.length === 1) {
                      setHeightFeet(newValue); // Keep single digits including zero
                    } else {
                      setHeightFeet(newValue.replace(/^0+/, "")); // Remove leading zeros
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                      e.preventDefault(); // Prevent entering period or exponential notation
                    }
                  }}
                  min="1"
                />{" "}
                <Text mx={1} mt={3}>
                  ft
                </Text>
                <Input
                  backgroundColor="white"
                  width="40%"
                  type="number"
                  value={heightInches}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                    if (newValue.length === 1) {
                      setHeightInches(newValue); // Keep single digits including zero
                    } else {
                      setHeightInches(newValue.replace(/^0+/, "")); // Remove leading zeros
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                      e.preventDefault(); // Prevent entering period or exponential notation
                    }
                  }}
                  min="0"
                  max="11"
                />{" "}
                <Text ml={1} mt={3}>
                  in
                </Text>
              </Flex>
            ) : (
              <Flex>
                <Input
                  backgroundColor="white"
                  width="40%"
                  type="number"
                  value={heightFeet}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                    if (newValue.length === 1) {
                      setHeightFeet(newValue); // Keep single digits including zero
                    } else {
                      setHeightFeet(newValue.replace(/^0+/, "")); // Remove leading zeros
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                      e.preventDefault(); // Prevent entering period or exponential notation
                    }
                  }}
                  min="1"
                />{" "}
                <Text mx={1} mt={3}>
                  m
                </Text>
                <Input
                  backgroundColor="white"
                  width="40%"
                  type="number"
                  value={heightInches}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                    if (newValue.length === 1) {
                      setHeightInches(newValue); // Keep single digits including zero
                    } else {
                      setHeightInches(newValue.replace(/^0+/, "")); // Remove leading zeros
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                      e.preventDefault(); // Prevent entering period or exponential notation
                    }
                  }}
                  min="0"
                />{" "}
                <Text ml={1} mt={3}>
                  cm
                </Text>
              </Flex>
            )}
            <Select
              backgroundColor="white"
              width="40%"
              mt={1}
              id="height"
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
            >
              <option value="m">meters/centimeters</option>
              <option value="ft">feet/inches</option>
            </Select>
          </FormLabel>
        </Flex>
        <FormLabel>
          Activity Level
          <Select
            backgroundColor="white"
            id="activityLevel"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="lightlyActive">
              Lightly Active (light exercise/sports 1-3 days/week)
            </option>
            <option value="moderatelyActive">
              Moderately Active (moderate exercise/sports 3-5 days/week)
            </option>
            <option value="veryActive">
              Very Active (hard exercise sports 6-7 days a week)
            </option>
            <option value="extraActive">
              Extra Active (very hard exercise/sports & a physical job)
            </option>
          </Select>
        </FormLabel>
        <Button
          width="25%"
          mt={2}
          type="submit"
          onClick={calculateCaloricMaintenance} // triggers the calculateCaloricMaintenance function
        >
          Calculate
        </Button>
        {caloricMaintenance && (
          <Box mt={5}>
            <Flex fontSize="2xl">
              Caloric Maintenance:{" "}
              <Text fontWeight="bold" ml={2}>
                {Math.round(caloricMaintenance)} calories
              </Text>
            </Flex>
            <Text fontSize="lg" fontWeight="bold" mt={8}>
              Consuming Recommendations:
            </Text>
            <Flex mt={4}>
              <Text fontSize={["md", "md", "lg"]} pt={1}>
                To Lose Weight:
              </Text>
              <Text
                fontSize={["md", "md", "lg"]}
                fontWeight="bold"
                ml={3}
                pt={1}
              >
                {Math.round(caloricMaintenance) - 500} calories
              </Text>
              <Box ml={2}>
                <Link to="/tracking/goals">
                  <Button>Set As Goal</Button>
                </Link>
              </Box>
            </Flex>
            <Flex mt={4}>
              <Text fontSize={["md", "md", "lg"]} pt={1}>
                To Maintain Weight:
              </Text>
              <Text
                fontSize={["md", "md", "lg"]}
                fontWeight="bold"
                ml={3}
                pt={1}
              >
                {Math.round(caloricMaintenance)} calories
              </Text>
              <Box ml={2}>
                <Link to="/tracking/goals">
                  <Button>Set As Goal</Button>
                </Link>
              </Box>
            </Flex>
            <Flex mt={4}>
              <Text fontSize={["md", "md", "lg"]} pt={1}>
                To Gain Weight:
              </Text>
              <Text
                fontSize={["md", "md", "lg"]}
                fontWeight="bold"
                ml={3}
                pt={1}
              >
                {Math.round(caloricMaintenance) + 500} calories
              </Text>
              <Box ml={2}>
                <Link to="/tracking/goals">
                  <Button>Set As Goal</Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        )}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Calculator;
