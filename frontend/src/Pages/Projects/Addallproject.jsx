import React from 'react'
import style from "./AddProject.module.css";
import {Box, FormLabel, H1, Heading, Input} from "@chakra-ui/react"

const Addallproject = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.div1}></div>

      <Box className={style.div2}>
        <Box className={style.topSection2}>
          <Box className={style.tophead1}>
            <Heading as={'h1'} className={style.head1}>Add Project</Heading>
          </Box>
        </Box>


        <Box>
            <FormLabel></FormLabel>
            <Input />
        </Box>


      </Box>

    </div>
  )
}

export default Addallproject