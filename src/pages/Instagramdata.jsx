import { Box, Flex, Grid, GridItem, Icon, Input, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {BsFillQuestionCircleFill} from "react-icons/bs"
import {BsArrowUpRight} from "react-icons/bs"
import {AiOutlinePlusSquare} from "react-icons/ai"
import LineChart from '../components/Test'
import Barchart from '../components/Barchart'
import { useDispatch, useSelector } from 'react-redux'
import { getFacebookData, getInstagramData } from '../redux/Appreducer/action'
import { RiVipDiamondFill } from 'react-icons/ri'



export const Instagramdata = () => {
  const labels = ['Aug2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22'];
  
  const selectora = useSelector(store => store.Appreducer.data)
    const [selector,setSelector]=useState(selectora)
//  const data = {
//     labels,
//     datasets: [
//       {
//         fill: true,
        
//         data: labels.map((data,ind) => data),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//     };

  
   
    const dispatch=useDispatch()  

  const [userData,setUserData]=useState({})
  const [impressionData, setImpressionData] = useState({})
  const [commentsData, setComentsData] = useState({})
  const [postData, setPostData] = useState({})
  

  const vinod = () => {
    console.log("vinod",selector)
    setUserData({
      labels: selector?.map((data) => data.id+2+"aug"),
      datasets: [
        {
          label: "Followers",
          data: selector.map((data) => data.followers),
          backgroundColor: [
            "#2c4bff",
          ],
          borderColor: "black",
              borderWidth: 2,
          fill:true
        },
      ],
    });
    

  setImpressionData({
        labels: selector?.map((data) => data.id+2+"aug"),
        datasets: [
          {
            label: "impressions",
            data: selector.map((data) => data.impression),
            backgroundColor: [
             
              "#2c4bff",
            ],
            borderColor: "black",
                borderWidth: 2,
            fill:true
          },
        ],
      });

       setComentsData({
        labels: selector.map((data) => data.id+2+"aug"),
        datasets: [
          {
            label: "Average comments per day",
            data: selector.map((data) => data.comment),
            backgroundColor: [
             
              "#2c4bff",
            ],
            borderColor: "black",
                borderWidth: 2,
            fill:true
          },
        ],
      });

        setPostData({
        labels: selector.map((data) => data.id+2+"aug"),
        datasets: [
          {
            label: "Average posts per day",
            data: selector.map((data) => data.post),
            backgroundColor: [
             
              "#2c4bff",
            ],
            borderColor: "black",
                borderWidth: 2,
            fill:true
          },
        ],
      });
    
  }
    
    // const [impressionData, setImpressionData] = useState({
    //     labels: selector.map((data) => data.id+2+"aug"),
    //     datasets: [
    //       {
    //         label: "impressions",
    //         data: selector.map((data) => data.impression),
    //         backgroundColor: [
             
    //           "#2c4bff",
    //         ],
    //         borderColor: "black",
    //             borderWidth: 2,
    //         fill:true
    //       },
    //     ],
    //   });

    
    // const [commentsData, setComentsData] = useState({
    //     labels: selector.map((data) => data.id+2+"aug"),
    //     datasets: [
    //       {
    //         label: "Average comments per day",
    //         data: selector.map((data) => data.comment),
    //         backgroundColor: [
             
    //           "#2c4bff",
    //         ],
    //         borderColor: "black",
    //             borderWidth: 2,
    //         fill:true
    //       },
    //     ],
    //   });
    // const [postData, setPostData] = useState({
    //     labels: selector.map((data) => data.id+2+"aug"),
    //     datasets: [
    //       {
    //         label: "Average posts per day",
    //         data: selector.map((data) => data.post),
    //         backgroundColor: [
             
    //           "#2c4bff",
    //         ],
    //         borderColor: "black",
    //             borderWidth: 2,
    //         fill:true
    //       },
    //     ],
    //   });
  // console.log(selector, "selector")
  
      useEffect(() => {
        

        if (selectora.length == 0) {
          
       
          dispatch(getInstagramData()) 
         
          }
       
       
      }, [selectora,selector])

  useEffect(() => {
    if (selector.length == 0) {
      setSelector(selectora)
    }
  },[selector,selectora])

  useEffect(() => {
    if (selector.length > 0) {
      vinod()
    }
  },[selector,selectora])
    
  console.log(selectora, 'selectora')
  console.log(selector, 'selector')
  
   
  return (
    <Box border="1px solid black" p="20px" maxH="80vh" overflow="scroll" w="100%">
      <Flex>
        <Flex flexGrow={1} >
          <Input w="80%" />
        </Flex>
        <Flex flexGrow={1}  justifyContent="end">
          <Input placeholder='date' w="35%" />
          <Input placeholder='export' w="20%"  />
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
        <Box shadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;" mt="40px" mb="40px" p="20px" textAlign="center">
          <Flex  justifyContent="space-between" position="relative">
            <Box mb="20px"> <Text fontSize="xl" as="b" >Perfomance</Text></Box>
            <Box>   <Flex alignItems="center" gap="10px">       How is this calculated?      <Icon h={35} w={35} ml="40px"  as={AiOutlinePlusSquare} /> </Flex>    </Box>
          </Flex>


          <SimpleGrid columns={[2, 2, 3]} spacing={["10px","10px","40px"]}  textAlign="left">
            <Box  mb="40px">
              <Text>Post</Text>
              <Flex alignItems="center" > 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box mb="40px">
              <Text>Impresion</Text>
              <Flex alignItems="center"> 2     <Icon   color='green.500'  as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text>   </Flex>
  </Box>
            <Box mb="40px">
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
            

</SimpleGrid>

       </Box>
        <Box shadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;" mt="40px" mb="40px" p="20px"><Text fontSize='xl' as="b" mb="50px">Average Perfomance</Text>
          <Flex  mt="20px" justifyContent="space-between"   flexDirection={["column","column","column","row","row"]}>
                      <Flex w={["100%", "100%","100%","30%","30%"]} flexDirection="column">
                          
                      <Flex> <Text>1</Text> <Icon color='green.500' as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text></Flex>
                      
             { postData.labels?.length>0 && <Barchart data={postData} />}
            
            </Flex>
            <Flex w={["100%", "100%","100%","30%","30%"]} flexDirection="column"> 
            
            <Flex> <Text>2</Text> <Icon color='green.500' as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text></Flex>
            
            { impressionData.labels?.length>0 && <Barchart data={impressionData} />} 
            
            </Flex>
                      <Flex w={["100%", "100%","100%","30%","30%"]} flexDirection="column">
                      <Flex> <Text>3</Text> <Icon color='green.500' as={BsArrowUpRight} />    <Text color='green.500'> 200 %</Text></Flex>
              
            { commentsData.labels?.length>0 && <Barchart data={commentsData} />}

            </Flex>
        </Flex>
        
        </Box>
       <Box shadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;" mt="40px" mb="40px" p="20px" > 
          <Box >  <Text fontSize='xl' as="b">Matrix perfomance</Text></Box>
          {/* <Line data={data} /> */}
             {  userData.labels?.length>0 &&   <  LineChart data={ userData} />}
       </Box>

      </Box>
         
      

    </Box>
  )
}
