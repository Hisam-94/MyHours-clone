import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../../Utils/Home/Expense_Image.png";

const TrackingExpense = () => {
  return (
    <Flex p="5rem 2rem" gap="1rem" alignItems="center">
      <Box w="65%">
        <Image src={image} alt="Coordinate_Image" />
      </Box>
      <Box w="35%" textAlign="start">
        <Heading color="#375d75" fontWeight="semibold" mb="1rem">
        Track your work hours, expenses and more
        </Heading>
        <Text fontSize="lg" mb="1rem">
        With My Hours you can track all your work. Add a detailed description to your time logs and expenses. We know time tracking is a hassle, so we’ve designed it to be super fast.
        </Text>
        <Text as="i" fontSize="lg" color="#375d75" mb="1rem">
        “A wonderful product. We no longer have to use multiple programs to track time, projects, PTO, etc.” - Katie L., Office Coordinator
        </Text>
      </Box>
    </Flex>
  )
}

export default TrackingExpense