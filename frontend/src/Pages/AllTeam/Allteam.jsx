import React, { useEffect, useState } from 'react'
import { Box, Button,  Heading, Input, Spacer, Table, TableContainer, Tbody,  Th, Thead, Tr } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { ArrowUpIcon, EditIcon } from "@chakra-ui/icons";
import { Td } from '../Pricepage/style';
import axios from "axios";
import Sidebar from '../Application/Sidebar/Sidebar';

const Allteam = () => {

    const [data, setData] = useState([]);
    const token = localStorage.getItem("psc_app_token");
    const getData = () => {
      try {
        return axios
          .get(`http://localhost:8080/team`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
          .then((r) => {
            console.log(r.data);
            setData(r.data);
          });
      } catch (err) {
        console.log(err);
      }
    };

    const handleDelete = (id) => {
        axios
          .delete(`http://localhost:8080/team/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
          .then(() => {
            getData();
          })
          .catch((err) => console.error(err));
      };

    useEffect(() => {
        getData();
      }, []);

      
// ! DYNAMIC DATA : (Previos)
// const [data , setData ] = useState([]);
// useEffect(() =>{
//     getData();
// } , []);

// const getData = async () =>{
//     const r = await axios("https://masaihours.herokuapp.com/teamMember/teamMemberdata");
//     setData(r.data);
// }


// ! STATIC DATA :
// const data = [
//     {"_id": "6307ac5c6e61dce47a2beaa6", teamsize: 3 },
//     {"_id": "6307ac5c6e61Tushar", teamsize: 6},
//     { "_id": "6307ac5c6e61Nilesh", teamsize: 9},
//     { "_id": "6307ac5c6e61Akash", teamsize: 5},
//     {"_id": "6307ac5c6e6Satish", teamsize: 2},
// ]

  return (
     <>
    <Box display='flex'>
        <Box w='17%'height='45rem' >
            <Sidebar/>
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
                        textAlign='left' pb='3' fontWeight='400' size='2xl'
                    >Teams </Heading>
                    <Box display='flex'>
                        <Input type='text' placeholder='Search by Team name' />
                        <Button> 📜SEARCH...   </Button>
                    </Box>
                </Box>
                <Spacer />
                <Button><Link to="/addteam">➕ New Team</Link></Button>
            </Box>

            <Box>
                <TableContainer mt="5">
                    <Table size="md">
                        <Thead borderBottom="2px solid lightGray" fontSize="lg">
                            <Tr>
                                <Th fontWeight="500" fontSize="15">NAME <ArrowUpIcon boxSize="5" mb="1" /></Th>
                                <Th fontWeight="500" fontSize="15">TEAM SIZE</Th>
                                <Th fontWeight="500" fontSize="15">ACTION</Th>
                                <Th fontWeight="500" fontSize="15">DELECT</Th>
                               
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data && data.map((el, index) => (
                                <Tr key={index}>
                                    <Td fontSize="14">{el.name}</Td>
                                    <Td fontSize="14">{el.teamsize}</Td>
                                    <Td fontSize="14" cursor="pointer" _hover={{ fontWeight: 500 }}><Link to={`/editteam/${el._id}`}>Edit </Link><EditIcon mb="1" /></Td>
                                    <Td fontSize="14" cursor="pointer" _hover={{ fontWeight: 500 }}>{index} Delete</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    </Box>
       
    </>
  )
}

export default Allteam