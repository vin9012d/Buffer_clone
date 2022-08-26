import { Box, Flex, Text,Icon,Button, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import { MdAccountCircle } from "react-icons/md"
import insta from "../svgs/page.svg"
export const Addcannel = () => {
  return (
    <Box m="auto" w="100%"  h="85vh" border="1px solid green" >
    <Flex m="auto" w="70%" h="100%" justifyContent="center" >
      <Box border="1px solid black" w="100%" >
          <Text fontSize='4xl'>Connect a new channel</Text>
          <Text>Looking for step-by-step instructions? Visit our Help Center to read our Getting Started guides and learn about supported channel types.</Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <Box>
              <img src={ insta} />
            </Box>
</Grid>
        <Box border="1px solid black" pl="35px" pr="35px" pt="15px" pb="15px">
        <Flex alignItems="center" gap={2} >
              <Icon h={19} w={19} ml="-10px"   as={MdAccountCircle} />
              Account
          </Flex>
          <Text>
          You’re on a free trial for the Essentials + Team Pack Plan. During your trial, you can connect as many channels as you’d like. If you choose to stay on this plan after your trial, it’ll cost $10 per channel per month billed yearly - Change Plan
          </Text>
        </Box>
      </Box>
       
      {}

    </Flex>
  </Box>
  )
}
