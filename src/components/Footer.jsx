import { Button, Flex, Heading,SimpleGrid,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import { BsPinterest, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import { FaFacebookF, FaTiktok,FaGooglePlay,FaApple } from "react-icons/fa"



export const Footer = () => (
  <>
    <SimpleGrid columns={[2,2,3,4,5]} p="5%"  justify="space-between" align={["center","center","center","flex-start"]} direction={["column","column","column","row"]}>
      <Flex direction="column"
      mb="20px" 
      mr="20px">
        <Heading fontSize={[18,22,30,46]}>
          Buffer
        </Heading>
        <Flex gap="1rem" fontSize={25} mt={[".75rem",".75rem","1rem","1.5rem"]}>
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
      <VStack  align={["center","center","center","flex-start"]}
      mb="20px">
        <Heading fontSize={22}>
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
      <VStack align={["center","center","center","flex-start"]}
      mb="20px"
      >
        <Heading fontSize={22}>
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

      <VStack 
      align={["center","center","center","flex-start"]}
      mb="20px"
      >
        <Heading fontSize={22}>
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

      <VStack  
      align={["center","center","center","flex-start"]}
      // align="flex-start"
      >
        <Heading fontSize={22}>
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
    </SimpleGrid>
  </>
)
