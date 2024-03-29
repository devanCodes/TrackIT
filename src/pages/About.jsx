import React from "react";
import { PiQuotesFill } from "react-icons/pi";
import {
  Flex,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const About = () => {
  return (
    <Flex w="100%" minHeight="100vh" direction="column" backgroundColor="rgba(255,205,84,255)" bgSize="cover">
      <Navbar />
      <Heading fontSize={["3xl", "3xl", "6xl"]} fontWeight="extrabold" pt={75} mt="auto" mx="auto">
        About TrackIT!
      </Heading>
      <Text fontSize={["md", "md", "lg"]} mx={100} align="center">
        In the vibrant world of health and wellness, TrackIT! emerged as a
        beacon of nutritional empowerment. Founded in 2023 by passionate fitness
        enthusiast and Software Developer, Devan Hailey, TrackIT! was born out
        of a vision to simplify the journey to a healthier lifestyle.
        <br></br>
        <br></br>
        Devan, having experienced the challenges of tracking his own caloric
        intake, set out to create a solution that seamlessly integrated
        technology with nutrition. Through extensive research, TrackIT! was
        meticulously crafted to be the go-to platform for individuals seeking an
        intuitive way to monitor their daily food consumption.
        <br></br>
        <br></br>
        Launched in April 2024, TrackIT! quickly gained popularity for its
        user-friendly interface and robust API-powered food database. The
        platform became a trusted companion for anyone on their fitness
        journeys. Whether users aimed to lose weight, maintain a balanced diet,
        or gain muscle mass, TrackIt! adapted to their needs, offering
        personalized recommendations.
        <br></br>
        <br></br>
        Now, TrackIT! stands as a testament to the commitment and vision of
        Devan, as well as the thriving community it has fostered. From its
        humble beginnings to a global phenomenon, TrackIT! remains dedicated to
        helping individuals make informed choices, one calorie at a time.
      </Text>
      <Text fontSize={["3xl", "3xl", "6xl"]} fontWeight="extrabold" mt={50} mx="auto">
        Testimonials
      </Text>
      <SimpleGrid gap={4} columns={[1, 1, 1, 2]} justifyContent="space-between" alignItems="center" mx="auto">
        <Card maxW="sm">
          <CardBody backgroundColor="blue.200">
            <Image
              src="https://ui-avatars.com/api/?name=DH"
              alt="Devan's Photo/Avatar"
              borderRadius="lg"
              mx="auto"
            />
            <Stack mt="4" spacing="3">
              <Heading size="md" mx="auto">Devan Hailey</Heading>
              <Heading size="xs" mx="auto">Software Developer</Heading>
            </Stack>
          </CardBody>
          <CardFooter backgroundColor="gray.200">
            <Text fontWeight="semibold">
              <PiQuotesFill />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus facilis alias totam perferendis cupiditate delectus
              nobis, aspernatur repudiandae amet unde adipisci earum
              voluptatibus perspiciatis non dicta vero enim voluptates odio.
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody backgroundColor="blue.200">
            <Image
              src="https://ui-avatars.com/api/?name=C"
              alt="Claydy's Photo/Avatar"
              borderRadius="lg"
              mx="auto"
            />
            <Stack mt="4" spacing="3">
              <Heading size="md" mx="auto">Claydy</Heading>
              <Heading size="xs" mx="auto">Lawyer</Heading>
            </Stack>
          </CardBody>
          <CardFooter backgroundColor="gray.200">
            <Text fontWeight="semibold">
              <PiQuotesFill />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus facilis alias totam perferendis cupiditate delectus
              nobis, aspernatur repudiandae amet unde adipisci earum
              voluptatibus perspiciatis non dicta vero enim voluptates odio.
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody backgroundColor="blue.200">
            <Image
              src="https://ui-avatars.com/api/?name=R"
              alt="Ron's Photo/Avatar"
              borderRadius="lg"
              mx="auto"
            />
            <Stack mt="4" spacing="3">
              <Heading size="md" mx="auto">Ron</Heading>
              <Heading size="xs" mx="auto">Retired Director of Operations</Heading>
            </Stack>
          </CardBody>
          <CardFooter backgroundColor="gray.200">
            <Text fontWeight="semibold">
              <PiQuotesFill />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus facilis alias totam perferendis cupiditate delectus
              nobis, aspernatur repudiandae amet unde adipisci earum
              voluptatibus perspiciatis non dicta vero enim voluptates odio.
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody backgroundColor="blue.200">
            <Image
              src="https://ui-avatars.com/api/?name=M"
              alt="Michelle's Photo/Avatar"
              borderRadius="lg"
              mx="auto"
            />
            <Stack mt="4" spacing="3">
              <Heading size="md" mx="auto">Michelle</Heading>
              <Heading size="xs" mx="auto">PE Teacher</Heading>
            </Stack>
          </CardBody>
          <CardFooter backgroundColor="gray.200">
            <Text fontWeight="semibold">
              <PiQuotesFill />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus facilis alias totam perferendis cupiditate delectus
              nobis, aspernatur repudiandae amet unde adipisci earum
              voluptatibus perspiciatis non dicta vero enim voluptates odio.
            </Text>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <Footer />
    </Flex>
  );
};

export default About;
