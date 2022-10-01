import React, { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup, Heading, Input, Spacer, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { ArrowUpIcon, ExternalLinkIcon, EditIcon } from "@chakra-ui/icons";
import { Td } from '../Pricepage/style';
import axios from "axios";

const Teamuser = () => {

// ! DYNAMIC DATA :
    const [data , setData ] = useState([]);
    useEffect(() =>{
        getData();
    } , []);

    const getData = async () =>{
        const r = await axios("https://masaihours.herokuapp.com/teamMember/teamMemberdata");
        setData(r.data);
    }


    // ! STATIC DATA :
    // const data = [{ "_id": "6307ac5c6e61dce47a2beaa6", "name": "sagar", "email": "dineshbhaikothadiya504@gmail.comma", "note": "abc", "role": "Manager", "laborRate": 2345, "billableRate": 456, "__v": 0 },
    // { "_id": "6307ac5c6e61Tushar", "name": "Tushar", "email": "dineshbhaikothadiya504@gmail.comma", "note": "def", "role": "Normal", "laborRate": 2345, "billableRate": 456, "__v": 0 },
    // { "_id": "6307ac5c6e61Nilesh", "name": "Nilesh", "email": "dineshbhaikothadiya504@gmail.comma", "note": "ghi", "role": "Manager", "laborRate": 2345, "billableRate": 456, "__v": 0 },
    // { "_id": "6307ac5c6e61Akash", "name": "Akash", "email": "dineshbhaikothadiya504@gmail.comma", "note": "xyz", "role": "Admin", "laborRate": 2345, "billableRate": 456, "__v": 0 },
    // { "_id": "6307ac5c6e6Satish", "name": "satish", "email": "dineshbhaikothadiya504@gmail.comma", "note": "mno", "role": "Manager", "laborRate": 2345, "billableRate": 456, "__v": 0 }
    // ];

    
    return (<>
    <Box display='flex'>
        <Box w='20%'height='45rem' bg='green'>
            <h1>SIDEBAR</h1>
        </Box>
        <Box w='80%'>
            <Box
                w='100%'
                display='flex'
                // bg='green'
                p='5'
                >
                <Box>
                    <Heading
                        as='h2' size='2xl'
                    >Team members</Heading>
                    <Box display='flex'>
                        <Input type='text' placeholder='Search Team member name' />
                        <Button> 📜 SATUS</Button>
                    </Box>
                </Box>
                <Spacer />
                <Button><Link to="/teamform">➕ New Team Member</Link></Button>
            </Box>

            <Box>
                <TableContainer mt="5">
                    <Table size="md">
                        <Thead borderBottom="2px solid lightGray" fontSize="lg">
                            <Tr>
                                <Th fontWeight="500" fontSize="15">NAME <ArrowUpIcon boxSize="5" mb="1" /></Th>
                                <Th fontWeight="500" fontSize="15">ACTIVITY</Th>
                                <Th fontWeight="500" fontSize="15">EMAIL</Th>
                                <Th fontWeight="500" fontSize="15" isNumeric>LABOR RATE</Th>
                                <Th fontWeight="500" fontSize="15" isNumeric>BILLABLE RATE</Th>
                                <Th fontWeight="500" fontSize="15">ROLE</Th>
                                <Th fontWeight="500" fontSize="15">STATUS <ArrowUpIcon boxSize="5" mb="1" /></Th>
                                <Th fontWeight="500" fontSize="15">ACTION</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data && data.map((el, index) => (
                                <Tr key={index}>
                                    <Td fontSize="14">{el.name}</Td>
                                    <Td fontSize="14" cursor="pointer" color="blue" _hover={{ color: "darkBlue" }}>View Activity <ExternalLinkIcon mb="1" /> </Td>
                                    <Td fontSize="14">{el.email}</Td>
                                    <Td fontSize="14" isNumeric>{`₹ ${el.laborRate}.00`}</Td>
                                    <Td fontSize="14" isNumeric>{`₹ ${el.billableRate}.00`}</Td>
                                    <Td fontSize="14">{el.role}</Td>
                                    <Td fontSize="14">Active</Td>
                                    <Td fontSize="14" cursor="pointer" _hover={{ fontWeight: 500 }}><Link to={`/edit/${el._id}`}>Edit </Link><EditIcon mb="1" /></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    </Box>
       
    </>)
}
export default Teamuser