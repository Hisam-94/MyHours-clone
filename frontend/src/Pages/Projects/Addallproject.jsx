import React from "react";
import style from "./AddProject.module.css";
import { Box, Button, FormControl, FormLabel, H1, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const Addallproject = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.div1}></div>
      {/* ************************************ */}
      <Box className={style.div2}>
        <Box className={style.topSection2}>
          <Box className={style.tophead1}>
            <Heading as={"h1"} className={style.head1}>
              Add Project
            </Heading>
          </Box>
      
          <Box>
          <FormControl id="name">
            <FormLabel className={style.label}>NAME</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        <br />

        <Box>
          <FormControl id="client">
            <FormLabel className={style.label}>CLIENT</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
  <br />
        <Box>
        <FormControl id="client">
            <FormLabel className={style.label}>DESCRIPTION</FormLabel>
          <Textarea></Textarea>
          </FormControl>
        </Box>

        <br /> <br />

        <Box className={style.box}>
            <Heading className={style.heading} as={'h3'}>Billable settings</Heading>
            <Text>Team member-based rate</Text>
        </Box>

        <br /> <br />
        

        <Box className={style.box}>
            <Heading className={style.heading} as={'h3'}>Rounding of time</Heading>
            <Text>No rounding</Text>
        </Box>

        <br /> <br />


        <Box className={style.box}>
            <Heading className={style.heading} as={'h3'}>Approval settings</Heading>
            <Text>Approval is not required</Text>
        </Box>

        <br /> <br />

        <Box className={style.btnBox}>
            <Box>

            <button className={style.btn}>Create Project</button>
            </Box>
            <Box>

            <button className={style.btn2}> Cancel </button>
            </Box>
        </Box>

        </Box>

        
      </Box>
    </div>
  );
};

export default Addallproject;
