import { Box, Flex, Text,Icon,Button, Grid, GridItem, Image, Img } from '@chakra-ui/react'
import React from 'react'
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

export const Addcannel = () => {

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
    <Box m="auto" w="100%"  h="85vh" border="1px solid green" >
    <Flex m="auto" w="70%" h="100%" justifyContent="center" >
      <Box border="1px solid black" w="100%" >
          <Text fontSize='4xl'>Connect a new channel</Text>
          <Text>Looking for step-by-step instructions? Visit our Help Center to read our Getting Started guides and learn about supported channel types.</Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} justifyContent="center">
            {channelData.map((item,ind) => (
                     <Flex flexDirection="column" alignItems="center" key={ind} shadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;' textAlign="center" p="20px">
                <Img w="80px" h="80px" src={item.image} />
                <Text mt="5x">{item.name}</Text>
               
                <ChannelModal  />
                   </Flex>
                  ))}
           
</Grid>
        
      </Box>
       
      {}

    </Flex>
  </Box>
  )
}
