import { Box, Flex, Grid, GridItem, Icon, Input, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import {BsFillQuestionCircleFill} from "react-icons/bs"
import {BsArrowUpRight} from "react-icons/bs"
import {AiOutlinePlusSquare} from "react-icons/ai"
import LineChart from '../components/Test'
import Barchart from '../components/Barchart'



export const Analytics = () => {
  const labels = ['Aug2','4','6','8','10','12','14','16','18','20','22'];

 const data = {
    labels,
    datasets: [
      {
        fill: true,
        
        data: labels.map((data,ind) => ind),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
    };
  
  return (
    <Box>
      <Flex>
        <Flex flexGrow={1} >
          <Input w="70%" />
        </Flex>
        <Flex flexGrow={1}  justifyContent="end">
          <Input placeholder='date' w="35%" />
          <Input placeholder='export' w="20%" />
        </Flex>

      </Flex>

      <Box>
        <Flex gap="30px">
          <Box>Overview</Box>
          <Box>Post</Box>
          <Box>Stories</Box>
          <Box>Audience</Box>
          <Box>Answers</Box>
        </Flex>
        <Box>
          <Flex justifyContent="space-between" position="relative">
            <Box>Perfomance</Box>
            <Box>   <Flex alignItems="center" gap="10px">       How is this calculated?      <Icon h={35} w={35} ml="40px"  as={AiOutlinePlusSquare} /> </Flex>    </Box>
          </Flex>


          <Grid templateColumns='repeat(3, 1fr)' gap={6} textAlign="left">
            <Box>
              <Text>Post</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box>
              <Text>Impresion</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box>
              <Text>Reach</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box>
              <Text>Likes</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box>
              <Text>Commments</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box>
              <Text>New Followers</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            

</Grid>

       </Box>
        <Box><Text>Average Perfomance</Text>
          <Flex>
            <Flex w="32%"> 1 <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text> <Barchart/>  </Flex>
            <Flex w="32%"> 2 <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text> <Barchart/>  </Flex>
            <Flex w="32%">3  <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text> <Barchart/>  </Flex>
        </Flex>
        
        </Box>
       <Box > 
          <Box>Matrix perfomance</Box>
          {/* <Line data={data} /> */}
          <LineChart/>
       </Box>

      </Box>
         
      

    </Box>
  )
}
