import { Box, Button, ButtonGroup, Heading, Input, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Teamuser = () => (
    <>
    <Box>
        <Box 
        w='100%'
        display='flex'
        bg='green'
        p='5'        >
            <Box>
            <Heading
            as='h2' size='2xl'
                >Team members</Heading>
            <Box display='flex'>
            <Input type='text' placeholder='Search Team member name'/> 
            <Button> 📜 SATUS</Button>
            </Box>
            </Box>
            <Spacer/>
            <Button>+ ADD NEW member</Button>
        </Box>
    </Box>
    </>
)

export default Teamuser