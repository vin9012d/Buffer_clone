import { Box, Button, Divider, Flex, Icon, Text } from '@chakra-ui/react'

import {MdAccountCircle} from "react-icons/md"
import {RiMoneyDollarBoxLine} from "react-icons/ri"
import {TbBox} from "react-icons/tb"
import {GrOrganization} from "react-icons/gr"
import React from 'react'

export const Channels = () => {
  return (
    <Flex>
      <Box h="85vh" bg="red.200" w="200px" p="10px" >
             <Box pl="10px" >Settings</Box>
        <Divider  borderColor="black.200" mt="4%" mb="4%" />
      <Flex flexDirection="column" gap={4} pl="20px">
                  
    <Flex alignItems="center" gap={2} >
                  <Icon h={19} w={19}   as={MdAccountCircle} />
                  Account
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={RiMoneyDollarBoxLine} />
                  Billing
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={TbBox} />
                 Channels
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={GrOrganization} />
                  Organization
              </Flex>
               
              </Flex>
    </Box>
      <Box m="auto" w="100%"  h="85vh" border="1px solid green" >
        <Flex m="auto" w="70%" h="100%" justifyContent="center" >
          <Box border="1px solid black" w="100%" >
            <Flex w="100%" justifyContent="space-between">
              <Text>Channels</Text>
              <Button>Connect channel</Button>
            </Flex>
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
    </Flex>
 
  )
}
