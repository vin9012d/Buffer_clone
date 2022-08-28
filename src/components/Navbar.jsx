import { Flex, Spacer, Center, Image, Text, Box, Button, useDisclosure, Heading, Container, VStack, Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { MdOutlinePublish } from "react-icons/md"
import { HamburgerIcon } from "@chakra-ui/icons";
import {SiGoogleanalytics,SiGooglemessages} from "react-icons/si";
import {FiPenTool} from "react-icons/fi"
import CustomModal from './CustomModal';
// import logo2 from "../Shakil_images/logo2.png"

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal,setShowModal]=useState(false)
 

  return (
    <Flex p="15px 5%" justify="space-between" align="center" cursor="pointer">

      <Link to={"/"}> <Box  w="100px">

        <Image
          // border="1px"
          src="https://seekvectorlogo.net/wp-content/uploads/2020/02/buffer-inc-vector-logo.png"

          width="100px"
          alt="logo"
        />
      </Box></Link>
      <Flex  gap={12} fontSize={20} display={["none", "none", "none", "flex"]}>

        <Menu isOpen={isOpen} w={100}>
          <MenuButton as={Button}
            bg="white"
            _hover={{ bg: "white" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            Actions
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {/* 1. */}
            <MenuItem>
              <Flex>
                <MdOutlinePublish fontSize={26} />
                <VStack  ml={3} align="flex-start" >
                  <Heading fontSize={16}>

                    Publishing
                  </Heading>
                  <Container pl={-10} noOfLines={2} fontSize={15} w={250}>
                    Plan,Collaborate, and publish
                    thumb-stopping content
                  </Container>
                </VStack>
              </Flex>

            </MenuItem>
            {/* 2. */}
            <MenuItem>
            <Flex>
                <SiGoogleanalytics fontSize={26} />
                <VStack  ml={3} align="flex-start" >
                  <Heading fontSize={16}>

                    Analytics
                  </Heading>
                  <Container pl={-10} noOfLines={2} fontSize={15} w={250}>
                    Analyze social media performance and create reports
                  </Container>
                </VStack>
              </Flex>
              </MenuItem>
              {/* 3. */}
            <MenuItem>
            <Flex>
                <SiGooglemessages fontSize={26} />
                <VStack  ml={3} align="flex-start" >
                  <Heading fontSize={16}>

                    Enagagement
                  </Heading>
                  <Container pl={-10} noOfLines={2} fontSize={15} w={250}>
                    Quickly navigate your comments and engage with your audience
                  </Container>
                </VStack>
              </Flex>
              </MenuItem>
              {/* 4. */}
            <MenuItem>
              <Flex>
                <FiPenTool fontSize={26} />
                <VStack ml={3} align="flex-start" >
                  <Heading fontSize={16}>

                    Start Page
                  </Heading>
                  <Container pl={-10} noOfLines={2} fontSize={15} w={250}>
                    Build a customized landing page in minutes
                  </Container>
                </VStack>
              </Flex>
              </MenuItem>
            <MenuItem>
            </MenuItem>
          </MenuList>
        </Menu>

        <Box>
          Pricing
        </Box>
        <Box>
          Blog
        </Box>
        <Link to={"/about"}>
        <Box>
          About
        </Box></Link>
        <Box>
          Customers
        </Box>
      </Flex>
      <Flex align="center" gap={5}>
        <Box>
          <Link to={"/login" }color="rgb(44, 75, 255)" fontSize="20px">Log in</Link>
        </Box>
        <Link to={"/publishing"}>        <Button colorScheme='messenger' variant='solid'>Get started now</Button> </Link>

        {/* <Button 
        display={["block","block","block","none","none"]}
        > */}
        <HamburgerIcon fontSize={30} display={["block", "block", "block", "none", "none"]} onClick={()=>{setShowModal(true)}} />
        {/* </Button> */}
      </Flex>
{
  showModal? <CustomModal show={showModal} setModal={setShowModal}/>:""
}



    </Flex>
  )
}
