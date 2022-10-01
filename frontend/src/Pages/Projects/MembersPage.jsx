import React, { useEffect } from "react";
import {
  Box,
  Heading,
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
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getProject } from "../../Redux/Projects/action";

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
      <Box className={style.div1}></Box>

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
            <Link to="/addprojects">
              <button className={style.btn}> All set and done </button>
            </Link>
          </Box>
        </Box>

        {/* ***************Section-2********************************* */}
        <Box className={style.section2}>
          <Box className={styles.sectionDiv2}>
            <Text className={style.span2}>
               All project members will be able to track time on this project and it’s tasks. Members with Manager role have access to the project and associated time logs.
            </Text>
          </Box>
        </Box>

        {/* ***************Section-3********************************* */}
      </Box>
    </Box>
  );
};
