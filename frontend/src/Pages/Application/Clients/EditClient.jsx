import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const EditClient = () => {
  const [form, setForm] = useState({});
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const token = localStorage.getItem("psc_app_token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };  

  const getData = async () => {
    console.log(form);
    const res = await axios.get(`http://localhost:8080/client/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }},);
    setForm(res.data);
  };

  const handlePatch = async () => {
    console.log(form);
    await axios.patch(`http://localhost:8080/client/edit/${id}`, form,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    navigate("/clients");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePatch();

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex>
      <Box w="17%">
        <Sidebar />
      </Box>
      <Box w="40%" m="auto" textAlign={"start"}>
        <Heading>Edit client</Heading>
        <FormControl onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormLabel
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.name ||""}
          >
            NAME
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="name"
            value={form.name ||""}
          ></Input>
          <FormLabel
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.contact_person ||""}
          >
            CONTACT PERSON
          </FormLabel>
          <Input
            type="text"
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="contactperson"
            value={form.contact_person ||""}
          ></Input>
          <FormLabel
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.email||""}
          >
            EMAIL
          </FormLabel>
          <Input
            type="email"
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="email"
            value={form.email ||""}
          ></Input>
          <FormLabel
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.phone||""}
          >
            PHONE
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="phone"
            value={form.phone ||""}
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
            value={form.address ||""}
          ></Textarea>
          <HStack spacing={1} justifyContent="space-betwee6">
            <Box w="46%">
              <FormLabel fontSize="12px" mt="1rem" color="gray.600">
                TAX NAME
              </FormLabel>
              <Input
                onChange={handleChange}
                value={form.tax_name ||""}
                w="100%"
                variant="outline"
                name="taxName"
              ></Input>
            </Box>
            <Box w="46%">
              <FormLabel fontSize="12px" mt="1rem" color="gray.600">
                TAX PERCENTAGE
              </FormLabel>
              <Input
                type="number"
                onChange={handleChange}
                value={form.tax_percentage ||""}
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
            value={form.tax_number ||""}
            variant="outline"
            name="taxNumber"
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

export default EditClient;
