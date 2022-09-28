import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../../Utils/Home/Coordinate_Image.png";

const CoordinateTeam = () => {
  return (
    <Flex p="5rem 2rem">
      <Box w="35%" textAlign="start">
        <Heading color="#375d75" fontWeight="semibold" mb="1rem">
          Coordinate your team, projects and tasks
        </Heading>
        <Text fontSize="xl" mb="1rem">
          Get out of your inbox mess: create projects, assign tasks and
          write-down or attach details. Track project profitability with hourly
          rates. Set up budgets and get reminded when you’re close.
        </Text>
        <Text as="i" fontSize="xl" color="#375d75" mb="1rem">
          “Excellent time tracker to manage your tasks! It changed the way I
          organize myself, I'm more productive since I used it!” - Guadalupe G.,
          Art Director
        </Text>
      </Box>
      <Box w="65%">
        <Image src={image} alt="Coordinate_Image" />
      </Box>
    </Flex>
  );
};

export default CoordinateTeam;
