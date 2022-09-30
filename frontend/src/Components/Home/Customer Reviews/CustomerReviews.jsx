import React from "react";
import { Box, Heading, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import styles from "./review.module.css";
import data from "./data.json";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CustomerReviews = () => {
  return (
    <Box>
      <Box>
        <Heading
          w="100%"
          as="h1"
          fontsize={["36px"]}
          noOfLines={1}
          color="#375d75"
          //   letterSpacing="1px"
          mt={["5px", "15px", "18px"]}
          align="center"
          // bg='blue'

          p={["3px 8px", "5px 18px"]}
        >
          My Hours has changed the way our customers work
        </Heading>
      </Box>
      <Box>
        <Text
          letterSpacing="1px"
          fontSize="lg"
          color="#212529"
          align="center"
          w={["80%", "70%", "60%", "50%"]}
          m="auto"
          mt="3rem"
          mb="4rem"
        >
          We’ve helped <Text as="u"> 250.000+ people</Text> track their work{" "}
          <Text as="u"> since 2002.</Text> Our software
          <Text as="u"> does not include employee monitoring</Text> and never
          will.
        </Text>
      </Box>

      <Grid
        w="90%"
        m="auto"
        // p={["0px 8px", "0px 18px"]}
        templateColumns={[
          "repeat(1fr)",
          "repeat(1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        templateRows="atuo"
        gap={"3rem"}
        mt="30px"
      >
        {data.map((el, ind) => (
          <GridItem>
            <Text
              //   letterSpacing="0.5px"
              //   fontWeight="350"
              //   fontSize={["15px", "4px", "16px"]}
              p=".5rem"
              fontSize={"lg"}
              textAlign="justify"
            >
              {el.review1}
              <span className={styles.highlighter}>{el.review2}</span>
              {el.review3}
            </Text>
            <Heading
              fontWeight="700"
              fontStyle="italic"
              size="md"
              mt="3"
              textAlign="left"
            >
              {el.author}
            </Heading>
          </GridItem>
        ))}
      </Grid>
      <Box w="35%" m="auto" mt="3rem">
        <Button
          colorScheme="blue"
          variant="link"
          textDecoration="underline"
          _hover={{ textDecoration: "none" }}
          align="center"
          pt="3rem"
          rightIcon={<ArrowForwardIcon />}
          fontSize="2xl"
        >
          Read More Reviews
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerReviews;
