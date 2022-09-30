import React from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Box,
  Text,
  HStack,
  Button,
  Table,
  TableCaption,
  Thead,
  Tr,
  Tbody,
  Heading,
  Container,
  Flex,
  Spacer,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react';

import { CheckIcon, ArrowRightIcon } from '@chakra-ui/icons';

import {
  Track,
  FreeList,
  ProList,
  Biling,
  Frequently_asked_questions,
  Integration_and_Apps,
  Organize,
  Report,
  Team,
} from './pricedata';


import {
  Buttons,
  ProButton,
  ButtonDiv,
  Div2,
  Div3,
  Dollar,
  Dollar$,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  List,
  FAQdiv,
  TableContainer,
  FAQtitle,
  Question,
  Answer,
  TrHead,
  Td,
  Th,
  Review,
  ReviewDiv,
  MemberName,
  Value,
  H5,
} from './style';
import { Link } from 'react-router-dom';

const panel = {
  width: '93%',
  margin: 'auto',
};



const Pricing = () => {
  return (
    <Box w='100%'>
      <div
        style={{
          fontFamily: 'Avernirnextitpro, sans-serif',
          textAlign: 'left',
        }}>
        <Heading mb='2rem' pt='7rem' color='#212529' fontWeight='200' p={['0rem 2rem', '0rem 2rem', '0rem 0rem', '0rem 0rem']} textAlign='center' size={['4xl', '4xl', '4xl', '4xl']}>Pick your plan</Heading>
        <Heading mb='2rem' fontFamily=' Avenir Next, sans-serif' p={['0rem 2rem', '0rem 2rem', '0rem 0rem', '0rem 0rem']} color='#375d75' fontWeight='600' textAlign='center' size={['4xl', '4xl', '4xl', '4xl']}>Track time on projects with your team.</Heading>

        <Flex>
          <Box p='4' pl={['2rem', '3rem', '5rem', '10rem']} >
            <Heading fontWeight='600'>Free</Heading>
            <Text noOfLines={2}>For individuals or terms just getting started with time tracking.</Text>
            <Heading>$0</Heading>
            <UnorderedList spacing={3} >
              <ListItem noOfLines={1}>Unlimited team members & projects</ListItem>
              <ListItem>Priority support</ListItem>
              <ListItem noOfLines={1}>Track time on projects & tasks</ListItem>
              <ListItem noOfLines={1}>Set billable rates</ListItem>
              <ListItem noOfLines={1}>Generate detailed reports</ListItem>
            </UnorderedList>
            <Button colorScheme='#EFEFEF' w='100%' variant='outline'>
              Selected
            </Button>
          </Box>
          <Spacer />
          <Box p='4' pr={['1rem', '3rem', '5rem', '10rem']} h={['1rem', '3rem', '5rem', '10rem']}>
            <Heading fontWeight='600'>Pro</Heading>
            <Text noOfLines={2}>For freelancing and terms activity managing their time.</Text>
            <Heading>$6</Heading>
            <UnorderedList spacing={3}>
              <ListItem noOfLines={1}>Everything in free PLUS</ListItem>
              <ListItem noOfLines={1}>Priority support</ListItem>
              <ListItem noOfLines={1}>Generate client invoices</ListItem>
              <ListItem noOfLines={1}>Add & edit logs on behalf of your team</ListItem>
              <ListItem noOfLines={1}>Extra features…</ListItem>
            </UnorderedList>
            <Button colorScheme='blue' w='100%' >14 day free trial</Button>
          </Box>
        </Flex>



        <TableContainer>
          <Table>
            <TableCaption>Feture list providede in free and paid versions</TableCaption>
            <Thead>
              <Tr>
                <Th >Feature</Th>
                <Th >Free</Th>
                <Th>Pro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <TrHead >
                <Td ><small><bolder>Track</bolder></small></Td>
                <Td></Td>
                <Td></Td>
              </TrHead>
              {Track.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </Tr>
                );
              })}
              <TrHead>
                <Td>Organize</Td>
                <Td></Td>
                <Td></Td>
              </TrHead>
              {Organize.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </Tr>
                );
              })}
              <TrHead>
                <Td>Billing</Td>
                <Td></Td>
                <Td></Td>
              </TrHead>
              {Biling.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </Tr>
                );
              })}
              <TrHead>
                <Td>Report</Td>
                <Td></Td>
                <Td></Td>
              </TrHead>
              {Report.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </Tr>
                );
              })}
              <TrHead>
                <Td>Team</Td>
                <Td></Td>
                <Td></Td>
              </TrHead>
              {Team.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </Tr>
                );
              })}
              <TrHead>
                <Td>Integration and Apps</Td>
                <Td></Td>
                <Td></Td>
              </TrHead>
              {Integration_and_Apps.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{e.title}</Td>
                    <Td>{e.free ? <CheckIcon /> : ''}</Td>
                    <Td>{e.pro ? <CheckIcon /> : ''}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <FAQdiv>
          <FAQtitle>Frequently Asked Questions</FAQtitle>
          <Accordion allowToggle>
            {Frequently_asked_questions.map((e, i) => {
              return (
                <AccordionItem key={i} style={{ margin: '1em 0' }}>
                  <AccordionButton
                    style={{
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <Question flex='1' textalign='left'>
                      {e.question}
                    </Question>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel style={panel}>
                    <Answer>{e.answer}</Answer>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </FAQdiv>
        <ReviewDiv>
          <Review w='100%'>
            <b>“</b><Text fontSize={['10px', '26px', '36px', '46px']}>I have tested similar time tracking apps but they all have
              limits. My Hours is without a doubt the most important tool I use in
              my business.</Text><b>”</b>
          </Review>

        

          <Box>
            <Flex  justifyContent='space-evenly'>
              <Box>
                <Text fontSize={['7px','10px','20px','20px']}>OUR MEMBERS</Text>
                <Text fontSize={['15px','30px','50px','70px']}>250k</Text>
              </Box>
              <Spacer/>

              <Box>
                <Text fontSize={['7px','10px','20px','20px']}>LOGED HOURS</Text>
                <Text fontSize={['15px','30px','50px','70px']}>1.6b</Text>
              </Box>
              <Spacer/>
              <Box>
                <Text fontSize={['7px','10px','20px','20px']}>AVERAGE RATING</Text>
                <Text fontSize={['15px','30px','50px','70px']}>4.5k</Text>
              </Box>
            </Flex>
          </Box>
         
        </ReviewDiv>
        <Box w='65%' m='auto' mt='3rem' marginBottom='50px'>
          <Text as="h1" align='center' fontSize={'3xl'} color='blue.700'>
            Have questions? We're here
          </Text>
          <Text align='center'>
            It's always nice to have someone to talk to when facing new
            software. Get in touch and
          </Text>
          <Text align='center'>we'll try our best to help you out.</Text>

          <Spacer/>
          <HStack w='100%' m='auto'  p='0% 10rem'align='center'>
            <Text 
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              leftIcon={<CheckIcon />}
              noOfLines={2}
              fontSize={['5px','8px','12px','16px']}
              // noOfLines={1}
              >
              EMAIL & LIVE CHAT
            </Text>
            <Text 
               colorScheme='blue'
               variant='link'
               textDecoration='underline'
               _hover={{ textDecoration: 'none' }}
               leftIcon={<CheckIcon />}
               noOfLines={2}
               fontSize={['5px','8px','12px','16px']}              >              TRAINING FOR TEAMS
            </Text>
            <Text 
              colorScheme='blue'
              variant='link'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
              leftIcon={<CheckIcon />}
              noOfLines={2}
              fontSize={['5px','8px','12px','16px']}              >
              KNOWLEDGE BASE
            </Text>
          </HStack>
        </Box>
      </div>
      <h2>Footer Component</h2>
    </Box>
  )
}

export default Pricing