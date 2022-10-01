import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spacer,
  IconButton,
  useDisclosure,
  ListItem,
  List,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../Navbar/navbar.module.css";

const Nav = [
  {
    to: "/how-it-works",
    title: "How it works",
  },
  {
    to: "/use-cases",
    title: "Use cases",
  },
  {
    to: "/pricing",
    title: "Pricing",
  },
  {
    to: "/support",
    title: "Support",
  },
  {
    to: "/login",
    title: "Sign in",
  },
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  console.log(isOpen);
  return (
    <Box
      className={styles.navSticky}
      boxShadow="md"
      p="5"
      bg="white"
      h={isOpen ? "100%" : "100%"}
    >
      <Flex alignItems={"center"} padding="0em 3em">
        <Box>
          <Link to="/">
            <Image
              src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
              w="8em"
            />
          </Link>
        </Box>
        <Spacer />
        <Box className={styles.hide}>
          {Nav.map((el) => (
            <NavLink
              style={{
                marginLeft: "2em",
                display: "inline-block",
                fontSize: "17px",
                color: "#3b8fc2",
                fontWeight: "500",
              }}
              key={el.title}
              to={el.to}
            >
              <Flex alignItems={"center"}>{el.title}</Flex>
            </NavLink>
          ))}
        </Box>
        <Box>
          <ButtonGroup>
            <Link to="/signup" className={styles.hide}>
              <Button
                className="nav-btn-getStarted"
                _hover={{ bgColor: "#3973ac", color: "white" }}
                bgColor={"#3b8fc2"}
                color="white"
                ml={"1rem"}
              >
                Get My Hours Free
              </Button>
            </Link>
            <Box className={styles.show}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Box>
          </ButtonGroup>
        </Box>
      </Flex>
      <Box className={isOpen ? styles.open : styles.hide && styles.myshow}>
        <List textAlign={"start"} ml="3rem" fontSize={"lg"} cursor="pointer">
          <Link to="/how-it-works">
            <ListItem>How it works</ListItem>
          </Link>
          <Link to="/use-cases">
            <ListItem>Use cases</ListItem>
          </Link>
          <Link to="/pricing">
            <ListItem>Pricing</ListItem>
          </Link>
          <Link to="/support">
            <ListItem>Support</ListItem>
          </Link>
          <Link to="/login">
            <ListItem>Signin</ListItem>
          </Link>
        </List>
        <Link to="/signup">
          <Button
            className="nav-btn-getStarted"
            _hover={{ bgColor: "#3973ac", color: "white" }}
            bgColor={"#3b8fc2"}
            color="white"
            ml={"1rem"}
          >
            Get My Hours Free
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
