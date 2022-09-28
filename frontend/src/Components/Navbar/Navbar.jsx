import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Menu,
  MenuButton,
  Spacer,
  MenuList,
  MenuItem, 
  IconButton
} from "@chakra-ui/react";
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon,  } from '@chakra-ui/icons'
import { HiChevronDown } from "react-icons/hi";
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
  // const IconButton = true
  return (
    <div className={styles.navSticky}>
      <Flex
        alignItems={"center"}
        padding="1em 3em 1em 3em"
        h={"10hv"}
        boxShadow="md"
        p="5"
        bg="white"
        // zIndex={99999}
      >
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
                marginLeft: "3em",
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
            {/* <Button
                className="nav-btn-getStarted"
                _hover={{ bgColor: "#3973ac", color: "white" }}
                bgColor={"#3b8fc2"}
                color="white"
                ml={"1rem"}
              >
                Get My Hours Free
              </Button>         */}
              <Box className={styles.show}>
            <Menu >
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T">
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                  New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                  Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="⌘O">
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>
            </Box>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
