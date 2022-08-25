import { Button, Flex, Heading,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import { BsPinterest, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import { FaFacebookF, FaTiktok,FaGooglePlay,FaApple } from "react-icons/fa"



export const Footer = () => (
  <>
    <Flex p="5%" border="2px red solid">
      <Flex direction="column" border="1px grey solid">
        <Heading mb="3rem">
          Buffer
        </Heading>
        <Flex gap="1rem" fontSize={25} m="1rem 0">
          <BsInstagram />
          <FaFacebookF />
          <BsTwitter />
          <FaTiktok />
          <BsLinkedin />
          <BsPinterest />
        </Flex>
        <Text fontWeight="bold">
          Download
        </Text>
        <Flex gap="20px" color="#2039f4" m=".25rem 0 .5rem 0">
          <Button colorScheme="#2039f4" variant="outline" borderRadius={15}>
            <FaGooglePlay />
            <Text ml="5px" fontSize={10}>
              Google Store
            </Text>
          </Button>
          <Button colorScheme="#2039f4" variant="outline" borderRadius={15}>
            <FaApple fontSize={20} />
            <Text ml="5px" fontSize={10}>App Store</Text>

          </Button>
        </Flex>
        <Text fontSize={13}>
          Copyright ©2022
        </Text>
        <Text fontSize={13}>
          Buffer | Privacy | Terms | Security
        </Text>
      </Flex>
      <VStack border="1px red solid" align="flex-start">
        <Heading>
          Tools
        </Heading>
        <Text>
          Publishing
        </Text>
        <Text>
         Analytics
        </Text>
        <Text>
          Engagement
        </Text>
        <Text>
          Start Page
        </Text>
        <Text>
          Extras
        </Text>
      </VStack>
      <VStack border="1px red solid" align="flex-start">
        <Heading>
          Resouces
        </Heading>
        <Text>
          Blog
        </Text>
        <Text>
         Content Library
        </Text>
        <Text>
          Browser Extention
        </Text>
        <Text>
          Free Image Editor
        </Text>
        
      </VStack>

      <VStack border="1px red solid" align="flex-start">
        <Heading>
          Support
        </Heading>
        <Text>
          Help Center
        </Text>
        <Text>
         Status
        </Text>
        <Text>
          Changelog
        </Text>
        <Text>
          Product Roadmap
        </Text>
       
      </VStack>

      <VStack border="1px red solid" align="flex-start">
        <Heading>
          Company
        </Heading>
        <Text>
          About
        </Text>
        <Text>
         Transparency
        </Text>
        <Text>
          Careers
        </Text>
        <Text>
          Accessibility
        </Text>
        <Text>
          Press
        </Text>
        <Text>
          Sitemap
        </Text>
      </VStack>
    </Flex>
  </>
)
