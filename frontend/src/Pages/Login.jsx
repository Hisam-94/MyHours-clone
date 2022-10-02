import { useState } from "react";
import a from "../Images/my_hour_logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  // Avatar,
  Image,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    setEmail("");
    setPassword("");
    await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Login successful !");
        if (res.token) {
          localStorage.setItem("psc_app_token", res.token);
          navigate("/")
        }
      })
      .catch((err) => {
        alert("wrong credential !");
        console.log(err);
      });
  };

  return (
    <Flex
      flexDirection="column"
      // width="100wh"
      height="100vh"
      // backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          boxShadow="2xl"
          rounded="md"
          bg="white"
          position="fixed"
          top="150px"
          minW={{ base: "90%", md: "468px" }}
        >
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              // height="65vh"
              width="100%"
            >
              <Center>
                <Image
                  height="45px"
                  mt="20px"
                  width="200px"
                  align="center"
                  src={a}
                />
              </Center>
              <Heading textAlign="left" fontSize="30px">
                Sign in
              </Heading>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    value={email}
                    required="true"
                    placeholder="email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder="Password"
                    required="true"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius="10"
                type="submit"
                variant="solid"
                bgColor="#80b7d8"
                width="full"
              >
                Sign in
              </Button>
              <Box>
                <Link color="teal.500" href="#">
                  New to My Hours? Sign Up
                </Link>
              </Box>
            </Stack>
          </form>
        </Box>
      </Stack>
      <ToastContainer position="top-center" />
    </Flex>
  );
};

export default Login;
