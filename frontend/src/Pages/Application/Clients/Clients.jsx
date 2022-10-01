import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Input, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Clients = () => {
  return (
    <Flex>
      <Box w="17%">
        <Sidebar />
      </Box>

      <Box border="1px solid black" w="100%">
        <Flex>
          <Heading size="xl" fontWeight="500">
            Clients
          </Heading>
          <Spacer />
          <Button
            colorScheme="blue"
            leftIcon={<AddIcon />}
            _hover={{ bgColor: "#3973ac", color: "white" }}
            bgColor={"#3b8fc2"}
            color="white"
            borderRadius="5px"
          >
            <Link to="/addClient">New Client</Link>
          </Button>
        </Flex>
        <Flex mt="4" textAlign={"start"}>
          <Input
            w="50%"
            focusBorderColor="blue.100"
            borderWidth="1px"
            placeholder="Search by Client name"
          />
          <Button
            ml="1rem"
            variant="outline"
            color={"blue.400"}
            leftIcon={<AddIcon />}
            _hover={{ bgColor: "#3973ac", color: "white" }}
          >
            Active
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Clients;
