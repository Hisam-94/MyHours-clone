import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import image from "../../Utils/Home/Report_image.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <Box>
      <Flex p="5rem 2rem" alignItems="center">
        <Box w="35%" textAlign="start">
          <Heading color="#375d75" fontWeight="semibold" mb="1rem">
            Create great-looking reports
          </Heading>
          <Text fontSize="lg" mb="1rem">
            Turn your work into dazzling reports with confidence. From Dashboard
            to more advanced time analytics. No need for extra spreadsheet work,
            even though you can export your data.
          </Text>
          <Text as="i" fontSize="lg" color="#375d75" mb="1rem">
            “My Hours is a super easy to use time tracker and great for sending
            hourly reports to clients for billable work” - Erin A. Business
            owner
          </Text>
        </Box>
        <Box w="65%">
          <Image src={image} alt="Coordinate_Image" />
        </Box>
      </Flex>
      <Link to="/how-it-works">
        <Flex alignItems="center" justifyContent="center" color="#3b8fc2">
          <Text
            as="u"
            mr=".5rem"
            fontSize="2xl"
            _hover={{ textDecoration: "none", cursor: "pointer" }}
          >
            See how My Hours works in detail
          </Text>
          <AiOutlineArrowRight style={{ fontSize: "1.7rem" }} />
        </Flex>
      </Link>
    </Box>
  );
};

export default Reports;
