import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import style from "./Projects.module.css";
import styles from "./Members.module.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../Redux/Projects/action";
import Sidebar from "../Application/Sidebar/Sidebar";

export const MembersPage = () => {
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projects?.length === 0) {
      getProject(dispatch);
    }
  }, []);

  console.log("projects", projects);
  return (
    <Box className={style.mainDiv}>
      <Box className={style.div1}>
        <Sidebar />
      </Box>

      <Box className={styles.div2}>
        {/* ***************Section-1********************************* */}
        <Box className={styles.topSection}>
          <Box>
            <Heading as={"h1"} className={styles.head1}>
              Project members
            </Heading>
            <Text></Text>
          </Box>
          <Box>
            <Link to="/">
              <button className={style.btn}> All set and done </button>
            </Link>
          </Box>
        </Box>

        {/* ***************Section-2********************************* */}
        <Box className={styles.section2}>
          <Box className={styles.sectionDiv2}>
            <Text className={style.span2}>
              All project members will be able to track time on this project and
              it’s tasks. Members with Manager role have access to the project
              and associated time logs.
            </Text>
          </Box>
        </Box>

        {/* ***************Section-3********************************* */}
        <Box className={styles.section3}>
          <Box className={styles.sectionDiv3}>
            <Box className={styles.topSection3}>
              <Text className={styles.text2} as="h5">
                Add team members to the project
              </Text>
              
              
            </Box>

            <Box>

            <Box className={styles.input}>

                 <Input className={styles.inputTag} type='text' placeholder="Search here" />
                 <Box className={styles.icondiv}>
                  <Link to='/teams' className={styles.link}>
                 <button className={styles.btnIcon}> 
                   <Box>
                      <AiOutlineUsergroupAdd />  
                    </Box>
                    <Box>
                      Teams
                    </Box>
                 </button>
                 </Link>
                 </Box>
              </Box>
              <Text>No Team members to add.</Text>
              <Text>
                Invite team members via
                <span className={styles.span}>
                  <Link to="/teams">Team section</Link>
                </span>
              </Text>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};
