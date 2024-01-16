import { useState } from "react";
import {
  Flex,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex pos="absolute" top="1rem" right="1rem" align="center">
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link to="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              aria-label="Tracking"
              my={5}
              w="100%"
            >
              Tracking
            </MenuButton>
            <MenuList>
              <MenuGroup title="Tracking">
                <MenuItem>
                  <Link to="/tracking">Daily Summary</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tracking/diary">Food Diary</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tracking/checkin">Check-In</Link>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Profile">
                <MenuItem>
                  <Link to="/tracking/goals">Goals</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tracking/calculator">H-B Calculator</Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
          <Link to="/login">
            <Button as="a" variant="ghost" aria-label="Login" my={5} w="100%">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              as="a"
              variant="ghost"
              aria-label="Register"
              my={5}
              w="100%"
            >
              Register
            </Button>
          </Link>
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />

      </Flex>

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={4}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link to="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" onClick={() => changeDisplay("none")}>
              Home
            </Button>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              aria-label="Tracking"
              my={5}
              w="100%"
            >
              Tracking
            </MenuButton>
            <MenuList>
              <MenuGroup title="Tracking">
                <MenuItem>
                  <Link to="/tracking" onClick={() => changeDisplay("none")}>Daily Summary</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tracking/diary"onClick={() => changeDisplay("none")}>Food Diary</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tracking/checkin"onClick={() => changeDisplay("none")}>Check-In</Link>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Profile">
                <MenuItem>
                  <Link to="/tracking/goals"onClick={() => changeDisplay("none")}>Goals</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/tracking/calculator"onClick={() => changeDisplay("none")}>H-B Calculator</Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%" onClick={() => changeDisplay("none")}>
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%" onClick={() => changeDisplay("none")}>
              Contact
            </Button>
          </Link>
          <Link to="/login">
            <Button as="a" variant="ghost" aria-label="Login" my={5} w="100%" onClick={() => changeDisplay("none")}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              as="a"
              variant="ghost"
              aria-label="Register"
              my={5}
              w="100%"
              onClick={() => changeDisplay("none")}
            >
              Register
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
