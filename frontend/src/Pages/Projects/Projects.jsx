import React from 'react'
import style from "./Projects.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Heading, Table, Text, Th, Tr } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box className={style.mainDiv}>
        <Box className={style.div1}></Box>


        <Box className={style.div2}>
            {/* ***************Section-1********************************* */}
            <Box className={style.topSection}>
                <Box>
                    <Heading as={"h1"} className={style.head1}>Projects</Heading>
                </Box>
                <Box>
                    <button className={style.btn}> + Add new project </button>
                </Box>
            </Box>

            {/* ***************Section-2********************************* */}
            <Box className={style.section2}>
                <Box className={style.sectionDiv2}>
                    <Box className={style.topSection2}>
                        <Text className={style.text2}>Organize your work with projects</Text>
                        <button className={style.btn2}>
                            <AiOutlineClose />
                        </button>
                    </Box>
                    <Text className={style.span2}>Before you start tracking your work, create projects, assign clients, and add tasks. You can choose from advanced billing rates, set up approval workflow, add custom budgets, and set task estimates. Assign tasks to your team and monitor allocated time.</Text>
                </Box>
            </Box>


            {/* ***************Section-3********************************* */}
            <Table className={style.table}>
                <Th>NAME</Th>
                <Th>CLIENT</Th>
                <Th>TOTAL HOURS</Th>
                <Th>BILLABLE AMOUNT</Th>
                <Th>CREATED</Th>
                <Th>STATUS</Th>

                <br />
                {/* <hr className={style.hr} /> */}

                <Tr></Tr>
            </Table>

        </Box>
    </Box>
  )
}

export default Projects
