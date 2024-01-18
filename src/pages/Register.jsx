import React from "react";
import {
  Button,
  Text,
  Image,
  Flex,
  Card,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import registerImage from "../assets/registerImage.jpg";

// MUST UPDATE THE FORM

const Register = () => {
  function validateUserame(value) {
    let error;
    if (!value) {
      error = "Username is required";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  }

  return (
    <Flex
      w="100%"
      minHeight="100vh"
      direction="column"
      backgroundColor="rgba(255,205,84,255)"
      bgSize="cover"
    >
      <Navbar />
      <Card
        mx="auto"
        mt={95}
        direction="column"
        maxWidth={["400px", "400px", "500px"]}
        shadow="lg"
      >
        <Image src={registerImage} alt="Food Plate Login Image" />
        <Text fontSize="xl" fontWeight="bold" ml={5} mt={3}>
          Register
        </Text>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="username" validate={validateUserame}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <FormLabel ml={5}>Username</FormLabel>
                    <Input
                      {...field}
                      placeholder="Username"
                      backgroundColor="white"
                      mb={2}
                      mx={5}
                      width="90%"
                    />
                    <FormErrorMessage mt={0} mb={3} ml={5}>
                      {form.errors.username}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel ml={5}>Email</FormLabel>
                    <Input
                      {...field}
                      placeholder="Email"
                      backgroundColor="white"
                      mb={2}
                      mx={5}
                      width="90%"
                    />
                    <FormErrorMessage mt={0} mb={3} ml={5}>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel ml={5}>Password</FormLabel>
                    <Input
                      {...field}
                      placeholder="Password"
                      backgroundColor="white"
                      mb={2}
                      mx={5}
                      width="90%"
                    />
                    <FormErrorMessage mt={0} mb={3} ml={5}>
                      {form.errors.password}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                my={4}
                mx={5}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="Login"
                size="md"
                width="90%"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <Footer />
    </Flex>
  );
};

export default Register;
