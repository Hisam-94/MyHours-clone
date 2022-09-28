import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import image from '../../Utils/Home/Home_image-1.png'
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <Box>
      <Box p="2rem 1rem" mt={"3rem"}>
        <Heading
          style={{ fontSize: "5rem", marginBottom: "2rem" }}
          fontWeight="thin"
          p="2rem 6rem"
        >
          <Text as={"span"} fontWeight="normal">
            Organize
          </Text>{" "}
          projects,
          <Text as={"span"} fontWeight="normal">
            Track
          </Text>{" "}
          time and{" "}
          <Text as={"span"} fontWeight="normal">
            Report
          </Text>{" "}
          your work
        </Heading>
        <Heading fontWeight={"thin"} size="lg" mb={"5rem"}>
          Coordinate projects and tasks. Track your work hours and create
          awesome-looking reports for clients.{" "}
          <Text as={"span"} fontWeight="bold" color={"#375d75"}>
            All-in-one free time tracking software.
          </Text>
        </Heading>
        <Link to="/signup">
          <Button
            className="nav-btn-getStarted"
            _hover={{ bgColor: "#3973ac", color: "white" }}
            bgColor={"#3b8fc2"}
            color="white"
            ml={"1rem"}
            h="4rem"
            fontSize="xl"
            p={"0.5rem 2.5rem"}
          >
            Get Started - It's Free
          </Button>
        </Link>
      </Box>
      <Box width={"80%"} m="auto">
        <Image src={image} alt="Description_Image" w="100%" h="100%"/>
      </Box>
    </Box>
  );
};

export default Description;
