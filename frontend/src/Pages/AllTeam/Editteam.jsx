import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import Sidebar from '../Application/Sidebar/Sidebar'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Editteam = () => {
  const [form, setForm] = useState({});
  console.log("form:", form);
  const params = useParams();
  const id = params.id;
  console.log("params", id)
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
    const res = await axios.get(`https://fierce-headland-49726.herokuapp.com/team/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },);
    setForm(res.data);
    console.log(res.data);
  };

  const handlePatch = async () => {
    console.log(form);
    await axios.patch(`https://fierce-headland-49726.herokuapp.com/team/edit/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    navigate("/allteam");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePatch();

  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <Box display='flex'>
      <Box w='17%' height='45rem' >
        <Sidebar />
      </Box>
      <Box w="40%" m="auto" textAlign={"start"} mt="3rem">
        <Heading fontWeight={"semibold"} >Edit Team</Heading>
        <FormControl >
          <FormLabel
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.name}
          >
            NAME
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="name"
            value={form.name}
          ></Input>
        </FormControl>
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
            onClick={() => navigate("/allteam")}
          >
            Cancel
          </Button>
      </Box>

    </Box>
  )
}

export default Editteam