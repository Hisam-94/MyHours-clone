import { useState } from "react";
import a from "../Images/my_hour_logo.png";
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
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      full_name,
      email,
      password,
    };
    fetch("http://localhost:8080/user/signup",{
      method: "POST",
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  };

  return (
    <Stack
      flexDir="column"
      mb="2"
      mt="50px"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        boxShadow="2xl"
        rounded="md"
        bg="white"
        minW={{ base: "90%", md: "568px" }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={1}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            height="105vh"
            width="100%"
          >
            <Image height="30px" mt="20px" width="150px" mb="15px" src={a} />

            <Text textAlign="left" as="b" fontSize="25px">
              Welcome to My Hours
            </Text>
            <Text textAlign="left" as="b" fontSize="15px">
              Full Name
            </Text>
            <Text textAlign="left" mt="-30px" fontSize="15px" color="#9ea4a9">
              So we know what to call you in the app
            </Text>
            <FormControl>
              <Input type="text" onChange={(e)=>setName(e.target.value)}/>
            </FormControl>
            <Text textAlign="left" as="b" fontSize="15px">
              EMAIL
            </Text>
            <Text textAlign="left" fontSize="15px" color="#9ea4a9">
              You will use this email to login
            </Text>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
              </InputGroup>
            </FormControl>
            <Text textAlign="left" as="b" fontSize="15px">
              PASSWORD
            </Text>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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
              Sign Up
            </Button>
            <Box>
              <Text textAlign="left" fontSize="15px">
                New to My Hours? By signing up you agree to the
              </Text>
              <Link color="teal.500" href="#" as='u'>
                Terms of Use
              </Link>
            </Box>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default SignUp;
