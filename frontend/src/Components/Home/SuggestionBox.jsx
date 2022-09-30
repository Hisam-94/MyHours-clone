import React from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const SuggestionBox = () => {
    const navigate = useNavigate()
  return (
    <Box
        p="0rem 2rem"
        gap="1.3rem"
        mt={'8rem'}
        mb={'4rem'}
        display={["block","block","flex","flex",]}
        >
        <Box p='3rem' bg='#f8fafb' mb="2rem" >
          <Text align='center' fontSize='4xl' fontWeight={"bold"} color='blue.700'>
            Waste no more time,
          </Text>
          <Text align='center' fontSize='4xl' fontWeight={"bold"} color='blue.700'>
            jump right in!
          </Text>
          <Button
            mt='1rem'
            fontSize={'2xl'}
            fontWeight={400}
            href={'#'}
            _hover={{ bgColor: "#3973ac", color: "white" }}
            bgColor={"#3b8fc2"}
            color="white"
            align='center'
            mb={'2rem'}
            p="2rem 2rem"
            onClick={()=>navigate('/login')}
            w={["100%","auto","auto","auto"]}>
            Get Started - it's Free
          </Button>
          <Text align='center'>
            My Hours is Free to use for teams of any size. <Text as="u">Pro paid plan</Text> comes
            with additional features like invoicing, admin controls and priority
            support.
          </Text>
        </Box>
        <Box p='3rem' bg='#faf9f7' textAlign={"start"} mb="2rem" >
          <Text fontSize='4xl' color='blue.700'>
          Need more info? Get
          </Text>
          <Text fontSize='4xl'  color='blue.700'>
          a product demo.
          </Text>
          <Button            
            fontSize={'lg'}
            lineHeight="1.25"
            fontWeight={"semibold"}
            href={'#'}
            _hover={{
              bg: '#3b8fc2',
              color: 'white',
            }}
            bg={'#faf9f7'}
            color={'#375d75'}
            align='center'
            border={'1px solid gray'}
            mt='1rem'
            mb='2rem'
            p="2rem 2rem"
            w={["100%","auto","auto","auto"]}>
            
            Talk to our team
          </Button>
          <Text align='left'>
            Teams of 6+ are welcome to book a personalized demo to see how My
            Hours works in detail.
          </Text>
        </Box>
      </Box>
  )
}

export default SuggestionBox