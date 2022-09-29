import React from 'react'

import { Box, Heading, Text, Button, Grid, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import data from "./data.json";
import Reviews from '../../Components/Review/Reviews';


const Resources = () => {
  return (
    <Box
    w="100%"
    // bg="green"
    m="auto"
    justifyContent="center">

    <Box display="flex"
      flexDirection="column"
      w="100%"
      m="auto"
      border="black">
        <Heading
               letterSpacing="3px" 
               fontWeight="300"
               m="auto" 
               fontSize={["40px","60px"]} pt="20px">
        Use cases
      </Heading>

      <Heading
      color="#375d75"
      fontWeight="500"
      letterSpacing="1px"
      size="xl"
      m="auto"
      > & how My Hours solves problems </Heading>

<Text
        color="#375d75"
        w="80%"
        m="auto"
        fontSize="2xl"
        letterSpacing="1px"
        mt="50px"
        textAlign="center"
        >
          From tracking time, to reporting and invoicing your clients,
          My Hours is there for you the whole time.
        </Text>

        <Button 

bg="#3b8fc2"
w="300px"
h="60px"
m="auto"
mt="70px"
border="1px solid"
borderRadius="7px"
color="white"
fontSize="2xl"
>
  <h2>Get started - It's Free</h2>
  {/* <Link to="/" >Get started - It's Free</Link> */}
</Button>


<Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        gridGap={'40px'}
        mt="100px"
        m="50px"
        // bg="black"
      >
        {data.map((el, ind) => (
          <Box bg={el.bg} key={ind} textAlign="center" boxShadow="2xl" rounded="20" p="0px 20px" h="420" border="1px solid lightBlue" >
            <Image m="auto" src={el.imgurl} h="200px"/>
            <Heading fontWeight="500" size="lg" textAlign="start">
              {el.title}
            </Heading>
            <Text mt="3" textAlign="left"  noOfLines={3}>{el.description}</Text>
          </Box>
        ))}
      </Grid> 

      <Reviews/>
    </Box>
    </Box>
  )
}

export default Resources