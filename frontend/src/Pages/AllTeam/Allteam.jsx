import React, { useEffect, useState } from 'react'
import { Box, Button,  Heading, Input, Spacer, Table, TableContainer, Tbody,  Th, Thead, Tr } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { ArrowUpIcon, EditIcon , DeleteIcon } from "@chakra-ui/icons";
import { Td } from '../Pricepage/style';
import axios from "axios";
import Sidebar from '../Application/Sidebar/Sidebar';

const Allteam = () => {

    const [data, setData] = useState([]);
    const token = localStorage.getItem("psc_app_token");
    const getData = () => {
      try {
        return axios
          .get(`https://fierce-headland-49726.herokuapp.com/team`, {
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
          .delete(`https://fierce-headland-49726.herokuapp.com/team/delete/${id}`, {
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

      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      

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
                        <Thead  borderBottom="2px solid lightGray"  fontSize="lg">
                            <Tr>

                                <Th textAlign={'center'} fontWeight="500" fontSize="15" bg='gray.100' w={'25%'}>NAME <ArrowUpIcon boxSize="5" mb="1" /></Th>
                                <Th textAlign={'center'} fontWeight="500" fontSize="15" bg='gray.100' w={'25%'}>TEAM SIZE</Th>
                                <Th textAlign={'center'} fontWeight="500" fontSize="15" bg='gray.100' w={'25%'}>ACTION</Th>
                                <Th textAlign={'center'} fontWeight="500" fontSize="15" bg='gray.100' w={'25%'}> DELECT</Th>
                               
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data && data.map((el, index) => (
                                <Tr key={index} >
                                    <Td bg='gray.100' w={'25%'} fontSize="14">{el.name}</Td>
                                    <Td bg='gray.100' w={'25%'} fontSize="14">{randomIntFromInterval(2, 6) }</Td>
                                    <Td bg='gray.100' w={'25%'} fontSize="14" cursor="pointer" _hover={{ fontWeight: 500 }}><Link to={`/editteam/${el._id}`}> Edit </Link><EditIcon mb="1" /></Td>
                                    <Td bg='gray.100' w={'25%'} fontSize="14" cursor="pointer" _hover={{ fontWeight: 500 }} 
                                    onClick={() => handleDelete(el._id)}
                                     > <DeleteIcon/> </Td>
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