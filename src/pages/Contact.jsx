import React from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// NEED TO WORK ON FORM ROUTE AND ACTUALLY VALIDATING EMAIL WITH FORMIK AND INCORPORATE FLASH
// IF USER IS ALREADY LOGGED IN, PREFILL EMAIL

const Contact = () => {
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
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
        Contact Me!
      </Heading>
      <Flex mx="auto" direction="column" minWidth={["none", "none", "500px"]}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      {...field}
                      placeholder="First Name"
                      backgroundColor="white"
                      mb={2}
                    />
                    <FormErrorMessage mt={0} mb={3}>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...field}
                      placeholder="Email"
                      backgroundColor="white"
                      mb={2}
                    />
                    <FormErrorMessage mt={0} mb={3}>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Type your message here!"
                backgroundColor="white"
              />
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
                size="lg"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Contact;
