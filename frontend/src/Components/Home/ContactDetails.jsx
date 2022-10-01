import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const navigate = useNavigate();
  return (
    <Box m="auto" mt="6rem">
      <Text align="center" fontSize={"3xl"} color="#375d75" fontWeight={"bold"}>
        Have questions? We're here
      </Text>
      <Text
        align="center"
        mt="1rem"
        fontSize={"lg"}
        w={["90%"]}
        ml="auto"
        mr="auto"
      >
        It's always nice to have someone to talk to when facing new software.
        Get in touch and
      </Text>
      <Text>we'll try our best to help you out.</Text>
      <Box display={["block", "block", "flex", "flex"]} justifyContent="center">
        <Box>
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            pt="2rem"
            leftIcon={<CheckIcon />}
            fontSize="md"
            mr={["0rem", "0rem", "1rem", "1rem"]}
            onClick={() => navigate("/support")}
          >
            EMAIL & LIVE CHAT
          </Button>
        </Box>
        <Box>
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            pt="2rem"
            leftIcon={<CheckIcon />}
            fontSize="md"
            mr={["0rem", "0rem", "1rem", "1rem"]}
            onClick={() => navigate("/support")}
          >
            TRAINING FOR TEAMS
          </Button>
        </Box>
        <Box>
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            pt="2rem"
            leftIcon={<CheckIcon />}
            fontSize="md"
          >
            KNOWLEDGE BASE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
