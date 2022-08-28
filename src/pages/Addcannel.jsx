import { Box, Flex, Text,Icon,Button, Grid, GridItem, Image, Img, Divider, SimpleGrid } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { MdAccountCircle } from "react-icons/md"
import insta from "../Vinod_images/insta.png"
import fb from "../Vinod_images/fb.jpg"
import gb from "../Vinod_images/gb.svg"
import linkedin from "../Vinod_images/linkedin.png"
import pinterest from "../Vinod_images/pinterest.png"
import shopify from "../Vinod_images/shopify.png"
import sp from "../Vinod_images/sp.png"
import tiktok from "../Vinod_images/tiktok.png"
import twitter from "../Vinod_images/twitter.png"
import { ChannelModal } from '../components/Channelmodal'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { TbBox } from 'react-icons/tb'
import { GrOrganization } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import AltNavbar from '../components/AltNavbar'

export const Addcannel = () => {
const hoverref=useRef()
  const channelData = [
    {    
      image: sp,
      name: "Start Page",
      connect:"create"
  },
    {    
      image: tiktok,
      name: "Tiktok",
      connect:"connect"
  },
    {    
      image: gb,
      name: "Google Business Profile",
      connect:"connect"
  },
    {    
      image: insta,
      name: "Instagram",
      connect:"connect"
  },
    {    
      image: fb,
      name: "Facebook",
      connect:"connect"
  },
    {    
      image: twitter,
      name: "Twitter",
      connect:"connect"
  },
    {    
      image: linkedin,
      name: "Linkedin",
      connect:"connect"
  },
    {    
      image: pinterest,
      name: "Pinterest",
      connect:"connect"
  },
    {    
      image: shopify,
      name: "Shopify",
      connect:"connect"
  },
]

  return (
<Box>
<AltNavbar />
    <Box>    <Flex m="auto" w="100%" h="85vh"  >
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
    <Flex m="auto" w={["90%","90%","50%"]} h="100%" justifyContent="center" >
      <Box  w="100%"  >
          <Text fontSize={["xl","xl","4xl"]} textAlign={["center","center","left"]} as="b">Connect a new channel</Text>
          <Text mb="25px" textAlign={["center","center","left"]}>Looking for step-by-step instructions? Visit our Help Center to read our Getting Started guides and learn about supported channel types.</Text>
          <SimpleGrid columns={[2, 2, 3]} gap={6} justifyContent="center">
            {channelData.map((item,ind) => (
                     <Flex   _hover={{  border:"1px solid blue" }} ref={hoverref} h="25vh" overflow="hidden"  flexDirection="column" alignItems="center" key={item.id} shadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;' textAlign="center" p="20px">
                <Img w={["30px","30px","50px"]}  h={["30px","30px","50px"]}  src={item.image} />
                <Text mt="5x">{item.name}</Text>
               
                <ChannelModal  />
                   </Flex>
                  ))}
           
          </SimpleGrid>
          <Box>
           <Link to={'/channels'}><Flex cursor="pointer" alignItems="center" gap={3} mt="10px">  <Icon h={19} w={19}   as={BiLeftArrowAlt} />
                  <Text as="b">Back to channels</Text></Flex> </Link> 
          </Box>
        
      </Box>
       
      {}

    </Flex>
    </Flex>
      </Box>
      </Box>

  )
}
