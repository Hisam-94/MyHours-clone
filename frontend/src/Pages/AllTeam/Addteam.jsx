import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import Sidebar from '../Application/Sidebar/Sidebar'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addteam = () => {
  const navigate = useNavigate();
  const [team, SetTeam] = useState({});

  const handleChange = (e) => {
    SetTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  };

  const postData = (team) => {
    const token = localStorage.getItem("psc_app_token");
    console.log(token);
    return axios
      .post("http://localhost:8080/team/create", team, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        alert("Team added successfully");
      })
      .catch((err) => console.log("err", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(team);
    postData(team);
    navigate("/allteam");
  };

  return (
    <Box display='flex'>
      <Box w='17%' height='45rem' >
        <Sidebar />
      </Box>
      <Box w="40%" m="auto" textAlign={"start"} mt="3rem">
        <Heading fontWeight={"semibold"} >Add Team</Heading>
        <FormControl onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormLabel fontSize="12px" mt="1rem" color="gray.600">
            NAME :
          </FormLabel>
          <Input
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="name"
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

export default Addteam
