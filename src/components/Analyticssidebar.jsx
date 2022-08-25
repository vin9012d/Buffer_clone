import { Box, Divider, Flex, Heading, Icon, Stack } from '@chakra-ui/react'
import React from 'react'

import { AiFillHome } from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillPieChart} from 'react-icons/ai'
import {AiFillSetting} from 'react-icons/ai'
import {FaShopify} from 'react-icons/fa'
import {SiSparkfun} from 'react-icons/si'
import { TiMessage } from 'react-icons/ti'
import "./Analyticssidebar.css"

const Analyticssidebar = () => {
  return (
      <Box>
          <Stack className='hoverprop' w="250px" pl="20px" pr="20px"  h="80vh"  textAlign="left" bg="red.200"  >
              <Flex  alignItems="center" gap={2} mt="5%"   _hover={{
    background: "white",
    color: "teal.500",
  }}>
                  <Icon h={19} w={19}   as={AiFillHome} />
                  Home
              </Flex>
              <Box>
                 
                  <Box mt="8%">Channels</Box>
                  <Divider borderColor="black.200" mt="4%" />
                      
                  <Flex direction="column" gap="12px" mt="4%"   _hover={{
    background: "white",
    color: "teal.500",
  }}>
                      <Flex alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={BsFacebook} />
                  Facebook
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={BsInstagram} />
                  Instgram
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={BsTwitter} />
                 Twitter
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={BsLinkedin} />
                  Linkedin
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={FaShopify} />
                  Shopify
              </Flex>
              </Flex>

                 
              </Box>
              <Box>
                  <Box mt="8%">Tools</Box>
                  <Divider borderColor="black.200" mt="4%" />
                   <Flex direction="column" gap="12px" mt="4%">                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={SiSparkfun} />
                  Campaigns
              </Flex>
                  <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={AiFillPieChart} />
                  Reports
                      </Flex>
                      </Flex>

              </Box>
              <Flex direction="column" pb="20px" gap="12px" mt="4%" flexGrow={1}  justifyContent="end">
             
              <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={AiFillSetting} />
                  Manage Channels
              </Flex>  
              <Flex  alignItems="center" gap={2}>
                  <Icon h={19} w={19}   as={TiMessage} />
                 Send Feedback
              </Flex>  
              </Flex>
             
         </Stack>
 </Box>
  )
}

export default Analyticssidebar