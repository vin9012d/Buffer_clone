import { Box, Button, Divider, Flex, Icon, Img, Text } from '@chakra-ui/react'

import {MdAccountCircle} from "react-icons/md"
import {RiMoneyDollarBoxLine} from "react-icons/ri"
import {TbBox} from "react-icons/tb"
import {GrOrganization} from "react-icons/gr"
import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getChannels } from '../redux/Appreducer/action'
import {BiDotsVerticalRounded} from "react-icons/bi"
 import {MdCloudDone } from "react-icons/md"
import { Channeldelete } from '../components/Channeldelete'
import { Link } from 'react-router-dom'


export const Channels = () => {

  const data = useSelector(store => store.Appreducer.ids)
  console.log(data,'channels')
  const dispatch = useDispatch()
  


  useEffect(() => {
    if (data.length == 0) {
    dispatch(getChannels())
    }
  },[])
  return (
    <Box>
    <Flex >
      <Box h="85vh" bg="#f5f5f5"  w="200px" p="10px" >
             <Box pl="10px" >Settings</Box>
        <Divider  borderColor="black.200" mt="4%" mb="4%" />
      <Flex flexDirection="column" pl="10px">
                  
    <Flex p="6px"  _hover={{
               background: 
      "#2c4bff",
                          color: "white",
    
  }} alignItems="center" gap={2} >
                  <Icon h={19} w={19}   as={MdAccountCircle} />
                  Account
              </Flex>
                  <Flex  p="6px"  _hover={{
               background: 
      "#2c4bff",
                          color: "white",
    
  }} alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={RiMoneyDollarBoxLine} />
                  Billing
              </Flex>
                  <Flex p="6px"  _hover={{
               background: 
      "#2c4bff",
                          color: "white",
    
  }} alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={TbBox} />
                 Channels
              </Flex>
                  <Flex p="6px"  _hover={{
               background: 
      "#2c4bff",
                          color: "white",
    
  }}  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={GrOrganization} />
                  Organization
              </Flex>
               
              </Flex>
    </Box>
      <Box m="auto" w="100%"  h="85vh" border="1px solid green" bg="#f5f5f5"  >
        <Flex m="auto" w={["90%","90%","60%","50%"]} h="100%" justifyContent="center" >
          <Box border="1px solid black" w="100%"   >
            <Flex  w="100%" justifyContent="space-between" flexDirection={["column","column","row"]} alignItems="center" p="10px" >
                <Text fontSize="4xl" as="b"> Channels</Text>
                <Link to={'/channel'}>
              <Button bg="#2c4bff" color="white">Connect channel</Button> </Link>
            </Flex>
            <Box border="1px solid red" pl="35px" pr="35px" pt="15px" pb="15px" shadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;' bg="white">
            <Flex alignItems="center" gap={2} >
                  <Icon h={19} w={19} ml="-10px"   as={MdAccountCircle} />
                  Account
              </Flex>
              <Text>
              You’re on a free trial for the Essentials + Team Pack Plan. During your trial, you can connect as many channels as you’d like. If you choose to stay on this plan after your trial, it’ll cost $10 per channel per month billed yearly - Change Plan
              </Text>
            </Box>
            <Box p="15px"> <Text fontSize="xl" as="b"> { data.length} Channels Connected </Text></Box>
            {data?.length > 0 && data.map((item) => (
            <Box key={item.id} border="1px solid green" shadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;' bg="white" mb="15px">           <Flex  p="20px" justifyContent="space-between" alignItems="center">
              <Flex gap="10px" alignItems="center">
                <Img w="40px" h="40px" src={item.logo}  alt="item.ids"/>
                <Box>
                  <Text>{ item.page}</Text>
                  <Text>{item.ids }</Text>
                </Box>
              </Flex>
                <Box>
                <Flex  alignItems="center" gap={5}>
                
                    <Icon h={19} w={19}  color="green.300" as={MdCloudDone} />
                    <Channeldelete id={item.id} />
                
              </Flex>
                  
              </Box>
            </Flex>
            </Box>
 
          ))}

          </Box>
           
        
        </Flex>
   
      </Box>
    </Flex>
    </Box>
  )
}
