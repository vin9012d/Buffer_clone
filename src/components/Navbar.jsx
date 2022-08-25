import { Flex, Spacer, Center, Image, Text, Box } from '@chakra-ui/react'
import React from 'react';
import logo2 from "../Shakil_images/logo2.png"

export const Navbar = () => {
  return (
    <Flex>
      <Box border="1px" w="100px">
        shakil
        <Image
          border="1px"
          src="https://www.pngitem.com/pimgs/m/393-3937687_buffer-company-hd-png-download.png"
          boxSize="100px"
          // width="50px"
          alt="logo"
        />

      </Box>
    </Flex>
  )
}
