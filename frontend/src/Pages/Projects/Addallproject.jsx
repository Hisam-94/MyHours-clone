import React, { useState } from "react";
import style from "./AddProject.module.css";
import { Box, Button, FormControl, FormLabel, H1, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { addProject } from "../../Redux/Projects/action";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import Sidebar from "../Application/Sidebar/Sidebar"
import { useNavigate } from "react-router-dom";


const option = [
  {
    id: 1,
    client:"Abc"
  },
  {
    id: 2,
    client:"masai"
  },
  {
    id: 3,
    client:"project"
  },
  {
    id: 4,
    client:"xyz"
  },
]

const Addallproject = () => {

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.project.projects);
    console.log('projects:', projects)

    const [name, setName] = useState("");
    const [client, setClient] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate()

    const handleSubmit = () => {
        if(name || client || desc){
            const payload = {
                project_name: name,
                client: client,
                desc: desc,
                date: new Date().toDateString()
            }
            dispatch(addProject(payload));
            navigate("/projects")
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
      <Box className={style.div1}>
        <Sidebar />
      </Box>
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
            <Select type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder='Select' >
            
              <option value='Elizabeth Jones'>Elizabeth Jones</option>
              <option value='Neil'>Neil</option>
              <option value="Liz O'Neill">Liz O'Neill</option>
              <option value='Prateek'>Prateek</option>
           
            </Select>
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
