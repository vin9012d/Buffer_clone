import { Box, Flex,Heading,Image,VStack,Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {ImCross} from "react-icons/im";
import {BiChevronRight} from "react-icons/bi"

const InnerpageModal = () => {
	const [show,setShow]=useState("block")
  return (
	<Box h="100vh" w="98vw"
	 border="1px red solid" 
	 position="fixed"
	 bg="#178EEA"
	 zIndex={2}
	 top={0}
	 left={0}
	 display={show}
	 >
		<Flex justify="space-between" align="center" mb={-7} >
		<Image
          // border="1px"
          src="https://logodix.com/logo/2043884.jpg"

          width={250}
          alt="logo"
        />
		<ImCross fontSize={30} color="white" onClick={()=>{setShow("none")
	alert("shakil")}}/>
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
			<Heading color="white" fontSize={28}>
				About 
				{/* <BiChevronRight/> */}
			</Heading>
			<Heading color="white" fontSize={28}>
				Customer 
				{/* <BiChevronRight/> */}
			</Heading>
			<Button colorScheme="orange" fontSize={20} p={5}>
				Get started now
			</Button>
			<Heading color="white" fontSize={28}>
				Log in
				{/* <BiChevronRight/> */}
			</Heading>
		</VStack>
	</Box>
  )
}

export default InnerpageModal