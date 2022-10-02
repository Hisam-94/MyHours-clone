import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Stack,
  Flex,
  RadioGroup,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  InputGroup,
  InputLeftAddon,
  Checkbox,
  Button,
  Select
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Application/Sidebar/Sidebar";

const Editform = () => {

  const [form, setForm] = useState({});
  // console.log('form1:', form);
  const params = useParams();
  
  const id = params.id;
  // console.log("params", id)

  const navigate = useNavigate();
  const token = localStorage.getItem("psc_app_token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // console.log("ANS",value);
  };

  const getData = async () => {
    console.log("FORM" ,form);
    const res = await axios.get(`https://fierce-headland-49726.herokuapp.com/teammember/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },);
    setForm(res.data);
    // console.log(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePatch();
  }

  const handlePatch = async () => {
    await axios.patch(`https://fierce-headland-49726.herokuapp.com/teammember/edit/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    navigate("/teams");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex >
       <Box w="17%">
        <Sidebar />
      </Box>

      <Box w="40%" m="auto" textAlign={"start"}>
        <Heading>Edit Team Member</Heading>

        <FormControl onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormLabel 
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.name}>
            NAME
          </FormLabel>
          <Input
             onChange={handleChange}
             w="100%"
             variant="outline"
             name="name"
             value={form.name || ''}
          ></Input>

          <FormLabel
            fontSize="12px"
            mt="1rem"
            color="gray.600"
            value={form.email  || ''}
          >
            EMAIL
          </FormLabel>
          <Input
            type="email"
            onChange={handleChange}
            w="100%"
            variant="outline"
            name="email"
            value={form.email || ''}
          ></Input>

           <FormLabel fontSize="12px" mt="1rem" color="gray.600">
           NOTES (PRIVATE TO ADMINS)
          </FormLabel>
          <Textarea
            onChange={handleChange}
            size="lg"
            h="4rem"
            w="100%"
            name="note"
            value={form.note || ''}
          ></Textarea>


          <FormLabel color="gray" mt="19" fontSize="13">
            ROLE
          </FormLabel>
          <RadioGroup textAlign={'start'} value={form.role || ''} name='role' >
            
              <Stack    
                direction="row"
                gap={10}
                h="70"
                border="1px solid lightGray"
                rounded="5"
              >
                {/* <Radio isDisabled value="Admin"  pl="10" size="md" name="role" onChange={handleChange}>
                  <Flex direction="column">
                    <Box pl="10" fontWeight="500" color="gray.600">
                      Account owner
                    </Box>
                    <Box pl="10" color="gray">
                      <h5 color="gray.600">Can not change the role.</h5>
                    </Box>
                  </Flex>
                </Radio> */}

                    <Select name='role' defaultValue={form.role || ''}  onChange={handleChange}>
                        <option  value="admin">Admin</option>
                        <option  value="manager">Manager</option>
                        <option  value="normal">Normal</option>
                    </Select>

              </Stack>
            
          </RadioGroup>

          <Accordion defaultIndex={[0]} textAlign={"start"} allowMultiple mt="30">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="500"
                    color="gray.500"
                    fontSize="xl"
                  >
                    Labour Rate
                    <AccordionIcon />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Enter default hourly rate for the team form to calculate Labor
                cost. This rate can be further specified on individual projects.
                <InputGroup mt="5">
                  <InputLeftAddon h="8" children="INR" />
                  <Input size="sm" type="tel" placeholder="0" name="laborRate" onChange={handleChange} value={form.laborRate || ''} />
                </InputGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="500"
                    color="gray.500"
                    fontSize="xl"
                  >
                    Billable Rate
                    <AccordionIcon />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Enter default billable rate for the team form to calculate Billable cost. This rate can be further specified on individual projects.
                <InputGroup mt="5">
                  <InputLeftAddon h="8" children="INR" />
                  <Input size="sm" type="tel" placeholder="0" name="billableRate" onChange={handleChange} value={form.billableRate || ''} />
                </InputGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Checkbox mt="25">Automatically add this team member to all new projects</Checkbox>

        <Box>
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
            onClick={() => navigate("/teams")}
          >
            Cancel
          </Button> 
        </Box>
        </FormControl>
          
      </Box>
    </Flex >
  );
};

export default Editform;
