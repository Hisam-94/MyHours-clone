import React, { useState } from "react";
import style from "./AddProject.module.css";
import { Box, Button, FormControl, FormLabel, H1, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { addProject } from "../../Redux/Projects/action";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

const Addallproject = () => {

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.project.projects);
    console.log('projects:', projects)

    const [name, setName] = useState("");
    const [client, setClient] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = () => {
        if(name || client || desc){
            const payload = {
                project_name: name,
                client: client,
                desc: desc
            }
            dispatch(addProject(payload));
            setName("");
            setClient("");
            setDesc("");
            console.log('payload:', payload)
        }
    }

    const handleCancel = () => {
      if(name || client || desc){
        setName("");
            setClient("");
            setDesc("");
      }
    }

    

  return (
    <Box className={style.mainDiv}>
      <Box className={style.div1}></Box>
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
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name of the project...' />
          </FormControl>
        </Box>
        <br />

        <Box>
          <FormControl id="client">
            <FormLabel className={style.label}>CLIENT</FormLabel>
            <Input type="text" value={client} onChange={(e) => setClient(e.target.value)} />
          </FormControl>
        </Box>
  <br />
        <Box>
        <FormControl id="client">
            <FormLabel className={style.label}>DESCRIPTION</FormLabel>
          <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
          </FormControl>
        </Box>

        <br /> <br />

        <Box className={style.box}>
            <Heading className={style.heading} as={'h3'}>Billable settings</Heading>
            <Text className={style.text}>Team member-based rate</Text>
        </Box>

        <br /> <br />
        

        <Box className={style.box}>
            <Heading className={style.heading} as={'h3'}>Rounding of time</Heading>
            <Text className={style.text}>No rounding</Text>
        </Box>

        <br /> <br />


        <Box className={style.box}>
            <Heading className={style.heading} as={'h3'}>Approval settings</Heading>
            <Text className={style.text}>Approval is not required</Text>
        </Box>

        <br /> <br />

        <Box className={style.btnBox}>
            <Box>

            <button className={style.btn} onClick={handleSubmit}>Create Project</button>
            </Box>
            <Box>

            <button className={style.btn2} onClick={handleCancel}> Cancel </button>
            </Box>
        </Box>

        </Box>

        
      </Box>
    </Box>
  );
};

export default Addallproject;
