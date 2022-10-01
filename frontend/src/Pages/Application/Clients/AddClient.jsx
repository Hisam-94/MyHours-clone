import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddClient = () => {
  const navigate = useNavigate();
  const [Client, SetClient] = useState({});

  const handleChange = (e) => {
    SetClient({
      ...Client,
      [e.target.name]: e.target.value,
    });
  };
  const postData = (client) => {
    
    const token = localStorage.getItem("psc_app_token")
    console.log(token)
    return axios
      .post("http://localhost:8080/client/create", client,{headers : {
        'Authorization' : `Bearer ${token}`
    }})
      .then((r) => {
        console.log(r.data)
        alert("Client added successfully")
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Client);
    postData(Client);
    navigate("/clients");
  };
  return (
    <Flex>
      <Box w="17%">
        <Sidebar />
      </Box>
      <Box w="40%" m="auto" textAlign={"start"} mt="3rem">
        <Heading fontWeight={"semibold"}>
          New client{" "}
          <QuestionOutlineIcon style={{ width: "16px", color: "#3b8fc2" }} />
        </Heading>
        <FormControl onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            NAME
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="name"
          ></Input>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            CONTACT PERSON
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="contact_person"
          ></Input>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            EMAIL
          </FormLabel>
          <Input
            type="email"
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="email"
          ></Input>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            PHONE
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="phone"
          ></Input>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            ADDRESS
          </FormLabel>
          <Textarea
            onChange={handleChange}
            size="lg"
            h="4rem"
            w="100%"
            name="address"
          ></Textarea>
          <HStack spacing={1} justifyContent="space-betwee6">
            <Box w="46%">
              <FormLabel fontSize="12px" mt="1rem" color="gray.600">
                TAX NAME
              </FormLabel>
              <Input
                onChange={handleChange}
                w="100%"
                variant="outline"
                name="tax_name"
              ></Input>
            </Box>
            <Box w="46%">
              <FormLabel fontSize="12px" mt="1rem" color="gray.600">
                TAX PERCENTAGE
              </FormLabel>
              <Input
                type="number"
                onChange={handleChange}
                w="100%"
                variant="outline"
                name="tax_percentage"
              ></Input>
            </Box>
          </HStack>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            TAX NUMBER
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="tax_number"
          ></Input>
          <Button
            fontSize={"lg"}
            fontWeight={400}
            href={"#"}
            _hover={{
              bg: "blue.800",
            }}
            bg={"blue.400"}
            color={"white"}
            align="center"
            mb={"3px"}
            mr={"1rem"}
            mt={"1rem"}
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button
            fontSize={"lg"}
            fontWeight={400}
            href={"#"}
            _hover={{
              bg: "blue.100",
            }}
            bg={"blue.50"}
            color={"blue.800"}
            align="center"
            mb={"3px"}
            mt={"1rem"}
            onClick={() => navigate("/clients")}
          >
            Cancel
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default AddClient;
