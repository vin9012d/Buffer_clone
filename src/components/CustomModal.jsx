import { Box, Flex,Heading,Image,VStack,Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {ImCross} from "react-icons/im";
import {BiChevronRight} from "react-icons/bi"
import {Link} from "react-router-dom"

const CustomModal = ({show,setModal}) => {
	
  return (
	<Box h="100vh" w="98vw"
	 border="1px red solid" 
	 position="fixed"
	 bg="#178EEA"
	 zIndex={2}
	 top={0}
	 left={0}
	 display={show?"block":"none"}
	 >
		<Flex justify="space-between" align="center" mb={-7} >
		<Link to={"/"}><Image
          // border="1px"
          src="https://logodix.com/logo/2043884.jpg"

          width={250}
          alt="logo"
        /></Link>
		<ImCross fontSize={30} color="white" onClick={()=>{setModal(false)
	}}/>
		</Flex>
		<VStack spacing={8}>
			<Heading color="white" fontSize={28}>
				Tools 
				{/* <BiChevronRight/> */}
			</Heading>
			<Heading color="white" fontSize={28}>
				Pricing 
				{/* <BiChevronRight/> */}
			</Heading>
			<Heading color="white" fontSize={28}>
				Blog 
				{/* <BiChevronRight/> */}
			</Heading>
			<Link to={"/about"}><Heading color="white" fontSize={28}>
				About 
				{/* <BiChevronRight/> */}
			</Heading></Link>
			<Heading color="white" fontSize={28}>
				Customer 
				{/* <BiChevronRight/> */}
			</Heading>
			<Button colorScheme="orange" fontSize={20} p={5}>
				Get started now
			</Button>
			<Link to={"/login"}><Heading color="white" fontSize={28}>
				Log in
				{/* <BiChevronRight/> */}
			</Heading></Link>
		</VStack>
	</Box>
  )
}

export default CustomModal