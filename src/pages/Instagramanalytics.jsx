import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AltNavbar from '../components/AltNavbar'
import Analyticssidebar from '../components/Analyticssidebar'
import { Facebookdata } from './Facebookdata'
import { Instagramdata } from './Instagramdata'

const Instagramanalytics = () => {
  return (
      <Box>
          <AltNavbar/>
          <Flex w="100%" justifyContent="space-between"  >
              <Analyticssidebar />
              <Instagramdata />
          </Flex>
    </Box>
  )
}

export default Instagramanalytics