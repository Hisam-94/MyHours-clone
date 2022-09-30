import React from 'react'
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import styles from "./Review.module.css";
import data from "./data.json";

const Reviews = () => {
  return (
    <Box
    alignContent='center'
    // mb="50px"
    height={{
        base: '100%', // 0-48em
        md: '50%', // 48em-80em,
        xl: '25%', // 80em+
      }}
      // bg='green'
      width={[
        '100%', // 0-30em
      ]}
      // bg="blue"
      >
 <Heading
        w="100%"
        as='h1'
        fontsize={{ base: '24px', md: '40px', lg: '56px' }}
        noOfLines={1}
        color="#375d75"
        letterSpacing="1px"
        mt={['5px', '15px', '18px']}
        align="center"
        // bg='blue'
        
        p={['3px 8px' , '5px 18px']} 

        >
        My Hours has changed the way our customers work
        </Heading>

        <Text
        letterSpacing="1px"
        fontSize="lg"
        align="center"
        p={['12px', '4px', '6px', '8px']}
        >
        We’ve helped 100.000+ people track their work since 2002. Our software does not include employee monitoring and never will.
        </Text>

        <Grid
        w="100%"
        // bg='blue.100'

        p={['0px 2rem' , '0px 5rem' , '0px 7rem', '0px 8rem']} 
        templateColumns={[ "repeat(1, 1fr)", "repeat(2, 1fr)" , "repeat(3, 1fr)", "repeat(3, 1fr)" ]}
        templateRows="atuo"
        mt="30px">
           
           {data.map((el, ind) => (
             <GridItem rounded="20" p="1rem" 
            >
             <Text
               letterSpacing="0.5px"
               fontWeight="350"
               fontSize={[ '15px', '15px',  '14px', '16px' ]}
               textAlign="center"
             >

               {el.review1}
               <span className={styles.highlighter}>{el.review2}</span>{" "}
             </Text>
             <Heading
               fontWeight="700"
               fontStyle="italic"
               size={["sm","md","md","md"]}
               mt="3"
               textAlign="left"
             >
                {el.author}
             </Heading>
           </GridItem>
              ))}
        
        </Grid>


        <h1>Footer Component</h1>
    </Box>
  )
}

export default Reviews
