import { Box, Flex,Heading,Image,VStack,Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {ImCross} from "react-icons/im";
import {BiChevronRight} from "react-icons/bi"
import { NavLink } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom"


const InnerModal = ({show,setModal}) => {
  return (
	<Box h="100vh" w="98vw"
	 border="1px red solid" 
	 position="fixed"
	 bg="#178EEA"
	 zIndex={2222}
	 top={0}
	 left={0}
	 display={show}
	 >
		<Flex justify="space-between" align="center" mb={-7} >
		<Link to={"/"}><Image
          // border="1px"
          src="https://logodix.com/logo/2043884.jpg"

          width={250}
          alt="logo"
        /></Link>
		<ImCross fontSize={"30px"} color="white" onClick= {()=>{setModal(false)
	}}/>
		</Flex>
		<VStack spacing={8}>
        <Flex alignItems="center" display={"block"}>
          
          
          <Flex display= {"block"}>
            <NavLink to="/publishing">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="black"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Publishing
                </Text>
              </Box>
            </NavLink>
            <NavLink to="/analytics">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="black"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Analytics
                </Text>
              </Box>
            </NavLink>
            <NavLink to="/engagement">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="black"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Engagement
                </Text>
              </Box>
            </NavLink>
            <NavLink to="#">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="black"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Start Page
                </Text>
              </Box>
            </NavLink>
          </Flex>
        </Flex>
		</VStack>
	</Box>
  )
}

export default InnerModal