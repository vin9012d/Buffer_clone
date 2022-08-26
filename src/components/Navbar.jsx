import { Flex, Spacer, Center, Image, Text, Box, Button } from '@chakra-ui/react'
import React from 'react';
import {Link} from "react-router-dom";
// import logo2 from "../Shakil_images/logo2.png"

export const Navbar = () => {
  return (
    <Flex p="15px 5%" justify="space-between" align="center">
      <Box border="1px" w="100px">

        <Image
          // border="1px"
          src="https://seekvectorlogo.net/wp-content/uploads/2020/02/buffer-inc-vector-logo.png"

          width="100px"
          alt="logo"
        />
      </Box>
      <Flex border="2px green solid" gap={12} fontSize={20}>
        <Box>
          Tools
        </Box>
        <Box>
          Pricing
        </Box>
        <Box>
          Blog
        </Box>
        <Box>
          About
        </Box>
        <Box>
          Customers
        </Box>
      </Flex>
      <Flex border="2px violet solid" align="center" gap={5}>
        <Box>
        <Link to="/login" style={{color:"rgb(44, 75, 255)",fontSize:"20px"}}>Log in</Link>
        </Box>
        <Button colorScheme='messenger' variant='solid'>Get started now</Button>
      </Flex>


    </Flex>
  )
}
