import { AddIcon, ArrowUpIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { TiDownloadOutline } from "react-icons/ti";
import axios from "axios";
import Client from "./Client";

// const clients = [
//   {
//     id: 1,
//     name: "Hisamuddin",
//     contact_person: "Hisam",
//     email: "Hisam@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Hisamuddin",
//     contact_person: "Hisam",
//     email: "Hisam@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Hisamuddin",
//     contact_person: "Hisam",
//     email: "Hisam@gmail.com",
//   },
//   {
//     id: 4,
//     name: "Hisamuddin",
//     contact_person: "Hisam",
//     email: "Hisam@gmail.com",
//   },
// ];

const Clients = () => {
  const [clients, setClients] = useState([]);
  const token = localStorage.getItem("psc_app_token");
  const clientsData = () => {
    try {
      return axios
        .get(`http://localhost:8080/client`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((r) => {
          console.log(r.data);
          setClients(r.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/client/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(() => {
        clientsData();
      })
      .catch((err) => console.error(err));
  };

  // // const search = async(data)=>{
  // //   await axios.get(`http://localhost:4040/`)
  // //   .then((res) =>setClients(res.data) )
  // //   .catch((err) => console.log(err))
  // // }

  useEffect(() => {
    clientsData();
  }, []);
  return (
    <Flex>
      <Box w="17%">
        <Sidebar />
      </Box>

      <Box border="1px solid black" w="100%" p="2rem">
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
            <Link to="/addclient">New Client</Link>
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
            leftIcon={<Search2Icon />}
            _hover={{ bgColor: "#3973ac", color: "white" }}
          >
            Active
          </Button>
          <Spacer />
          <Button
            ml="1rem"
            variant="outline"
            color={"#375d75 "}
            bgColor="blue.50"
          >
            <TiDownloadOutline style={{ width: "20px", height: "18px" }} />
          </Button>
        </Flex>
        <TableContainer mt="5">
          <Table size="md">
            <Thead borderBottom="2px solid lightGray" fontSize="lg">
              <Tr>
                <Th w={"50%"} fontWeight="500" fontSize="15">
                  NAME <ArrowUpIcon boxSize="5" mb="1" />
                </Th>
                <Th fontWeight="500" fontSize="15">
                  CONTACT PERSON
                </Th>
                <Th fontWeight="500" fontSize="15">
                  CONTACT DETAIL
                </Th>
                <Th fontWeight="500" fontSize="15">
                  STATUS <ArrowUpIcon boxSize="5" mb="1" />
                </Th>
                <Th fontWeight="500" fontSize="15">
                  ACTION
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {clients?.map((client) => (
                <Client
                  key={client._id}
                  client={client}
                  handleDelete={handleDelete}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export default Clients;
