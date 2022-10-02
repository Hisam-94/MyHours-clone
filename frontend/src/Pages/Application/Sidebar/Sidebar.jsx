import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import styled from "./sidebar.module.css";
import React from "react";
import {
  BsBell,
  BsBriefcase,
  BsFolder,
  BsGrid3X3GapFill,
  BsPeople,
  BsPerson,
  BsPhone,
  BsQuestionCircle,
  BsStopwatch,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineBarChart } from "react-icons/ai";

const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.setItem("psc_app_token","");
    navigate("/")
  }
  return (
    <Box bgColor="#f8f9fa" minWidth={"200px"} position="sticky" zIndex={99}>
      <Flex
        className={styled.logo}
        style={{
          position: "sticky",
          top: "0px",
          backgroundColor: "#f8f9fa",
          padding: "1rem 0rem 1rem 0rem",
        }}
      >
        <BsGrid3X3GapFill
          style={{ width: "20px", height: "20px", marginTop: "2px" }}
        />
        <img
          src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"
          alt="Logo"
        />
      </Flex>
      <Box>
        <Link to="#">
          <Box className={styled.icon}>
            <BsStopwatch
              style={{
                width: "15px",
                height: "15px",
                marginTop: "10px",
                marginLeft: "14px",
              }}
            />
            <p>Track</p>
          </Box>
        </Link>
        <Link to="/projects">
          <Box className={styled.icon}>
            <BsBriefcase
              style={{
                width: "15px",
                height: "15px",
                marginTop: "10px",
                marginLeft: "14px",
              }}
            />
            <p>Projects</p>
          </Box>
        </Link>
        <Accordion>
          <AccordionItem style={{ border: "none" }}>
            <h2>
              <AccordionButton _expanded={{ bg: "#d9efe7", color: "black" }}>
                <Box flex="1" textAlign="left" border="none">
                  <Box className={styled.icon3}>
                    <AiOutlineBarChart
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "10px",
                        marginLeft: "16px",
                      }}
                    />
                    <p>Reports</p>
                  </Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={5}
              style={{
                backgroundColor: "#d9efe7",
                textAlign: "start",
                color: "black",
              }}
            >
              <Box style={{ marginLeft: "37px" }}>
                <p style={{ cursor: "pointer" }}>Dashboard</p>
                <p style={{ cursor: "pointer" }}>Activity</p>
                <p style={{ cursor: "pointer" }}>Team pivot</p>
                <p style={{ cursor: "pointer" }}>Economy</p>
                <p style={{ cursor: "pointer" }}>Timesheet</p>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <h2>
              <AccordionButton _expanded={{ bg: "#d9efe7", color: "gray" }}>
                <Box flex="1" textAlign="left" border="none">
                  <Link to="/Clients">
                    <Box className={styled.icon3}>
                      <BsFolder
                        style={{
                          width: "18px",
                          height: "15px",
                          marginTop: "10px",
                          marginLeft: "16px",
                        }}
                      />

                      <p>Clients</p>
                    </Box>
                  </Link>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={5}
              style={{
                backgroundColor: "#d9efe7",
                textAlign: "start",
                color: "black",
              }}
            >
              <Box style={{ marginLeft: "37px" }}>
                <Link to={"/clients"}><p style={{ cursor: "pointer" }}>Clients</p></Link>
                <p style={{ cursor: "pointer" }}>Invoices</p>
                <p style={{ cursor: "pointer" }}>Uninvoiced</p>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <h2>
              <AccordionButton _expanded={{ bg: "#d9efe7", color: "gray" }}>
                <Box flex="1" textAlign="left" border="none">
                  <Link to="/teams">
                    <Box className={styled.icon3}>
                      <BsPeople
                        style={{
                          width: "20px",
                          height: "18px",
                          marginTop: "10px",
                          marginLeft: "16px",
                        }}
                      />
                      <p>Team</p>
                    </Box>
                  </Link>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={5}
              style={{
                backgroundColor: "#d9efe7",
                textAlign: "start",
                color: "black",
              }}
            >
              <Box style={{ marginLeft: "37px" }}>
                <Link to={"/teams"}><p style={{ cursor: "pointer" }}>Team members</p></Link>
                <Link to={"/allteam"}><p style={{ cursor: "pointer" }}>Teams</p></Link>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          </Accordion>
          <div className={styled.pro}>
            <p> Pro trial expires in 10 days</p>
            <h1>Keep/Leave the Pro</h1>
          </div>
          <Box className={styled.icon}>
            <BsQuestionCircle
              style={{
                width: "15px",
                height: "15px",
                marginTop: "10px",
                marginLeft: "14px",
              }}
            />
            <p>Help</p>
          </Box>
          <Box className={styled.icon}>
            <BsPhone
              style={{
                width: "15px",
                height: "15px",
                marginTop: "10px",
                marginLeft: "14px",
              }}
            />
            <p>Apps</p>
          </Box>
          <Box className={styled.icon}>
            <BsBell
              style={{
                width: "15px",
                height: "15px",
                marginTop: "10px",
                marginLeft: "14px",
              }}
            />
            <p>What's new</p>
          </Box>
          <Link to="/">
            <Box className={styled.icon} onClick={handleLogout}>
              <BsPerson
                style={{
                  width: "15px",
                  height: "15px",
                  marginTop: "10px",
                  marginLeft: "14px",
                }}
              />
              <p>Sign Out</p>
            </Box>
          </Link>
          <Box className={styled.icon}>
            <BsPerson
              style={{
                width: "15px",
                height: "15px",
                marginTop: "10px",
                marginLeft: "14px",
              }}
            />
            <p>{"User Name"}</p>
          </Box>
        
      </Box>
    </Box>
  );
};

export default Sidebar;
