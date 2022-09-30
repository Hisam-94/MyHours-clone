import React from "react";
import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const ToolsForOrganizations = () => {
  const navigate = useNavigate();

  return (
    <Box w={"100%"} m={"auto"} mt="6rem">
      <Heading
        fontStyle={"sans-serif"}
        align={"center"}
        fontSize={"4xl"}
        fontWeight="semibold"
        color="#45697f"
      >
        A flexible tool for all types of organizations
      </Heading>
      <br />
      <SimpleGrid
        color="#45697f"
        mt={"1.5rem"}
        spacing={2}
        columns={{ sm: 1, md: 3 }}
        spacingX="40px"
        spacingY="20px"
        letterSpacing={0}
        py="2rem"
        px="2rem"
        fontWeight={"semibold"}
      >
        <Box
          bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91878f08abb5f52fdfe77_Polygon%201.png')"
          bgRepeat="no-repeat"
          bgSize={"contain"}
          bgPosition={"center"}
        >
          <Text fontSize={"2xl"} fontWeight="bold" pt=".4rem">
            Billing
          </Text>
          <br />
          <Text fontSize={"xl"} w={"80%"} align="center" m={"auto"} >
            We need to bill our clients with flexible hourly rates.
          </Text>
          <br />
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            fontSize="20px"
            fontWeight={"hairline"}
          >
            Here's how
          </Button>
        </Box>
        <Box
          bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9199aba16f3d43d7e7547_Polygon%202.png')"
          bgRepeat="no-repeat"
          bgSize={"contain"}
          bgPosition={"center"}
        >
          <Text fontSize={"2xl"} fontWeight="bold" pt="1rem">
            Profitability
          </Text>
          <br />
          <Text fontSize={"xl"} w={"80%"} align="center" m={"auto"}>
            We would like to calculate the profitability of our projects.
          </Text>
          <br />
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            fontSize="xl"
            fontWeight={"hairline"}
            pb="3rem"
          >
            Here's how...
          </Button>
        </Box>
        <Box
          bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919bb3ab7af761ad225f0_Polygon%202(1).png')"
          bgRepeat="no-repeat"
          bgSize={"contain"}
          bgPosition={"center"}        
        >
          <Text fontSize={"2xl"} fontWeight="bold" pt="1rem">
            Time tracking
          </Text>
          <br />
          <Text fontSize={"xl"} w={"80%"} align="center" m={"auto"}>
            We want to track time on projects and tasks.
          </Text>
          <br />
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            fontSize="xl"
            fontWeight={"hairline"}
            pb="3rem"
          >
            Here's how...
          </Button>
        </Box>
        <Box
          bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919d312c3ba440fb9c340_Polygon%201(1).png')"
          bgRepeat="no-repeat"
          bgSize={"contain"}
          bgPosition={"center"}
        >
          <Text fontSize={"2xl"} fontWeight="bold" pt="1rem">
            Attendance
          </Text>
          <br />
          <Text fontSize={"xl"} w={"80%"} align="center" m={"auto"}>
            We need to track employee attendance/absence and tasks.
          </Text>
          <br />
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            fontSize="xl"
            fontWeight={"hairline"}
            pb="3rem"
          >
            Here's how...
          </Button>
        </Box>
        <Box
          bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919ef96a46fcd34ee713e_Polygon%202(2).png')"
          bgRepeat="no-repeat"
          bgPosition={"center"}
          bgSize={"contain"}
        >
          <Text fontSize={"2xl"} fontWeight="bold" pt="1rem">
            Client reporting
          </Text>
          <br />
          <Text fontSize={"xl"} w={"80%"} align="center" m={"auto"}>
            I need to report the time spent to clients or invoice them.
          </Text>
          <br />
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            fontSize="xl"
            fontWeight={"hairline"}
            pb="3rem"
          >
            Here's how...
          </Button>
        </Box>
        <Box
          bgImage="url('https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91a1994cca247f6e383d4_Polygon%203.png')"
          bgRepeat="no-repeat"
          bgPosition={"center"}
        >
          <Button
            colorScheme="blue"
            variant="link"
            textDecoration="underline"
            _hover={{ textDecoration: "none" }}
            alignItems="center"           
            pt="5rem"
            rightIcon={<ArrowForwardIcon />}
            fontSize="2xl"
            onClick={() => navigate("/use-cases")}
          >
            Find More Use Case's
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ToolsForOrganizations;
