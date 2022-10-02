
            //               (
            //                 <Field
            //                 name="role" component={AdaptedRadioGroup} label="Role :" >
            //                 <Stack>
            //                     <Radio value="admin" color="red">
            //                         <Stack
            //                             direction="row"
            //                             gap={10}
            //                             h="70"
            //   `                          border="1px solid lightGray"
            //                             rounded="5"
            //                         >

            //                             <Flex direction="column">
            //                                 <Box pl="10" fontWeight="500" color="gray.600" textAlign="left">
            //                                     Admin
            //                                 </Box>
            //                                 <Box pl="10" color="gray">
            //                                     <Text fontSize={{ base: '15px', md: '20px', lg: '18px' }} noOfLines={2} >Can view and edit anything in group or workspace.</Text>
            //                                 </Box>
            //                             </Flex>
            //                         </Stack>

            //                     </Radio>
            //                     <Radio value="manager" color="green">
            //                         <Stack
            //                             direction="row"
            //                             gap={10}
            //                             h="70"
            //                             border="1px solid lightGray"
            //                             rounded="5"
            //                         >

            //                             <Flex direction="column">
            //                                 <Box pl="10" fontWeight="500" color="gray.600" textAlign="left">
            //                                     Manager
            //                                 </Box>
            //                                 <Box pl="10" color="gray">
            //                                     <Text fontSize={{ base: '15px', md: '20px', lg: '18px' }} noOfLines={2} >Can view and manage assigned projects. Cannot view other projects.</Text>
            //                                 </Box>
            //                             </Flex>
            //                         </Stack>
            //                     </Radio>
            //                     <Radio value="normal" color="blue">
            //                         <Stack
            //                             direction="row"
            //                             gap={10}
            //                             h="70"
            //                             border="1px solid lightGray"
            //                             rounded="5"
            //                         >

            //                             <Flex direction="column">
            //                                 <Box pl="10" fontWeight="500" color="gray.600" textAlign="left">
            //                                     Normal
            //                                 </Box>
            //                                 <Box pl="10" color="gray">
            //                                     <Text fontSize={{ base: '15px', md: '20px', lg: '18px' }} noOfLines={2} > Can only track time on assigned projects/tasks.</Text>
            //                                 </Box>
            //                             </Flex>
            //                         </Stack>
            //                     </Radio>
            //                 </Stack>

            //             </Field>
            //               )


import React, { useState } from 'react'
import {
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    Accordion,
    InputGroup,
    InputLeftAddon,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Textarea,
    // Tooltip,
    Flex,
} from '@chakra-ui/react';

// import { Form, Field, useField, useForm } from "react-final-form";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import Sidebar from '../Application/Sidebar/Sidebar';

const Teamform = () => {
    const navigate = useNavigate();
    const [member, SetMember] = useState({});

    const handleChange = (e) => {
        SetMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };
    console.log("member",member);    

    const postData = (member) => {
        const token = localStorage.getItem("psc_app_token");
        console.log(token);
        return axios
            .post("http://localhost:8080/teamMember/create", member, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((r) => {
                console.log(r.data);
                alert("Member added successfully");
            })
            .catch((err) => console.log("err", err));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(member);
        postData(member);
        navigate("/teams");
    };
    return (
        <Flex>
            <Box w="17%">
                <Sidebar />
            </Box>
            <Box w="40%" m="auto" textAlign={"start"} mt="3rem">
                <Heading fontWeight={"semibold"}>
                    Add Team member{" "}
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
                        EMAIL
                    </FormLabel>
                    <Input
                        onChange={handleChange}
                        type="email"
                        w="100%"
                        variant="outline"
                        name="email"
                    ></Input>

                    <FormLabel fontSize="12px" mt="1rem" color="gray.600">
                        NOTE
                    </FormLabel>
                    <Textarea
                        onChange={handleChange}
                        size="lg"
                        h="4rem"
                        w="100%"
                        name="note"
                    ></Textarea>


                    <Accordion defaultIndex={[0]} allowMultiple mt="30">
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
                                Enter default hourly rate for the team member to calculate Labor
                                cost. This rate can be further specified on individual projects.

                                <InputGroup mt="5">
                                    <InputLeftAddon h="9" mt='0' children="INR" />
                                    <Input
                                        onChange={handleChange}
                                        w="100%"
                                        variant="outline"
                                        size="2xl"
                                        type="number"
                                        placeholder="   Enter laber rate here"
                                        name="laborRate"
                                    />
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
                                Enter default billable rate for the team member to calculate
                                Billable cost. This rate can be further specified on individual
                                projects.

                                <InputGroup mt="5">
                                    <InputLeftAddon h="9" mt='0' children="INR" />
                                    <Input
                                        onChange={handleChange}
                                        w="100%"
                                        variant="outline"
                                        size="2xl"
                                        type="number"
                                        placeholder="Enter billing rate here"
                                        name="billableRate"
                                    />
                                </InputGroup>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



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
        </Flex >
    )
}

export default Teamform