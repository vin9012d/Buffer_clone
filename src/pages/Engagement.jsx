import React from 'react'
import { Box, Img, Heading, Button, Text } from '@chakra-ui/react'
import { engagementdata, engagementdata1 } from '../components/engagement'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { BsFillHeartFill, } from "react-icons/bs";
import { MdChat } from "react-icons/md";
import { PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, Popover, PopoverArrow, PopoverCloseButton, PopoverAnchor } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

export const Engagement = () => {
  const ref = useRef(null)
  const [cid, scid] = useState(1)
  const [user,suser] = useState(engagementdata)
  const [acc,sacc] = useState("Animals_hd_pic!")
  const [data, sdata] = useState({})
  const [a, sa] = useState(-1)
  const [b, sb] = useState(-1)
  console.log(user)

  function handleeclick(id) {
    scid(id)
    const data1 = user.find((d) => d.id === id)
    sdata(data1)
  }

  function Comments() {
    return (
      <Box textAlign="center">
        <img style={{ margin: "auto", marginTop: "7vh", width: "55%" }} src="https://static.buffer.com/images/engage/inbox-empty.jpeg" alt="" />
        <Heading fontSize={"18px"} display="flex" justifyContent={"center"} mt={"4vh"}>There are no comments on this post yet</Heading>
        <Button backgroundColor={"rgb(44,75,255)"} color={"white"} mt={"2vh"} >Engage With Next Post</Button>
      </Box>
    )
  }
  function Show() {
    return (
      <Box  width="100%">
        {data.commentsno > 0 && data.comments.map((el, index) => {
          return (
            <Accordion key={index} allowToggle borderBottom={"none"}>
              <AccordionItem borderBottom={"none"}>
                <h2>
                  <AccordionButton width={"97%"} margin="auto" backgroundColor={"rgb(224,224,224)"} height="13vh" mt={"1vh"}
                    borderRadius="5px" >
                    <Box display={"flex"} >
                      <Box borderRadius="50%" backgroundColor={"rgb(184,184,184)"} padding="5px 13px" mt={"-30px"} >
                        <Heading fontSize={"22px"} color="white">{el.id[0].toUpperCase()}</Heading>
                      </Box>
                    </Box>
                    <Box  width={"100%"} height="100%" textAlign={"left"} >
                      <Box display={"flex"}><Text fontWeight={"bold"}>&nbsp;&nbsp;&nbsp;{el.id}&nbsp;&nbsp;&nbsp;&nbsp;</ Text><Text>{el.comment}</Text></Box>
                      <Text fontSize={"12px"}>&nbsp;&nbsp;&nbsp;{el.days}</Text>
                      {el.rep?<Text fontSize={"10px"} fontWeight={"bold"} mt="2%">&nbsp;&nbsp;&nbsp;---View Reply</Text>:""}
                    </Box>
                    
                  </AccordionButton>
                </h2>
                {el.rep?<AccordionPanel pb={4} >
                <Box display={"flex"} flexDirection="row-reverse">
                      <Box borderRadius="50%" backgroundColor={"rgb(184,184,184)"} padding="5px 13px" mt={"0px"} textAlign={"right"}>
                        <Heading fontSize={"22px"} color="white" textAlign={"right"}>{el.id[0].toUpperCase()}</Heading>
                      </Box>
                      <Box textAlign={"right"}>
                      <Box display={"flex"}>
                      <Text>{el.rep}</Text><Text fontWeight={"bold"}>&nbsp;&nbsp;&nbsp;{el.id}&nbsp;&nbsp;&nbsp;&nbsp;</ Text>
                      </Box>
                  <Text fontSize={"12px"}>&nbsp;&nbsp;&nbsp;{el.rdays}&nbsp;&nbsp;&nbsp;</Text>
                  </Box>
                    </Box>
                  
                </AccordionPanel>:""}
              </AccordionItem>
            </Accordion>
          )
        })}
      </Box>
    )
  }

  function a1(){
    suser(engagementdata)
    sacc("Animals_hd_pic!")
  }
  function a2(){
    suser(engagementdata1)
    sacc("Nature_hd_pic!")
  }
  useEffect(() => {
    handleeclick(1)
  }, [])
  return (
    <Box display={"flex"}>
      <Box height={"90vh"} width={"36%"} border={"0.1px solid grey"} cursor="pointer">
        <Box height={"10%"} borderBottom={"0.1px solid grey"} display="flex" justifyContent={"center"} alignItems="center">
          <Box zIndex={"222"} width="50%" margin={"auto"} >
            <Popover width={"100%"}>
              <PopoverTrigger width={"100%"}>
                <Button width={"100%"} >{acc}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader onClick={a1} >Animals_hd_pic!</PopoverHeader>
                <PopoverHeader onClick={a2}>Nature_hd_pics</PopoverHeader>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Box height={"90%"} overflowY={"scroll"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"15px"} padding="3%">
          {user.length > 0 && user.map((items) => {
            return (<Box key={items.id} position={"relative"} width="100%" height={"22vh"}
              onClick={() => handleeclick(items.id)}>
              <Box position={"absolute"} top="0px" left="0px"
                ref={ref}
                bgGradient={cid == items.id ? "none" : "linear(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"}
                border={cid == items.id ? "5px solid rgb(44,75,255)" : "none"}
                width="100%" height={"100%"}
                borderRadius={"7px"}>
              </Box>
              <img style={{ borderRadius: "7px", width: "100%", height: "100%" }} src={items.imgurl} alt="" />
            </Box>)
          })}
        </Box>
      </Box>
      <Box height={"88vh"} borderRadius={"5px"} border={"0.1px solid grey"} width={"40%"} marginLeft={"10%"} marginTop={"1vh"}>
        <Box height={"20%"} borderBottom={"0.1px solid grey"} display="flex" alignItems="center">
          <Box width={"20%"} height="90%" borderRadius={"7px"} ml="10px" >
            <img style={{ borderRadius: "7px", width: "100%", height: "100%" }} src={data.imgurl} alt="" />
          </Box>
          <Box ml={"3.5%"} lineHeight="4.4vh">
            <Text textAlign={"left"}>{data.caption}</Text>
            <Box display={"flex"} alignItems="center" >
              <  BsFillHeartFill color={"grey"} display={"inline"} /><Text textlign={"left"}>&nbsp;&nbsp;{data.likes} &nbsp;&nbsp;&nbsp;</Text>
              <  MdChat color={"grey"} display={"inline"} /><Text> &nbsp;&nbsp;&nbsp;{data.commentsno}</Text>
            </Box>
            <Text fontSize={"12px"} textAlign={"left"} color="grey">{data.days}</Text>
          </Box>
        </Box>
        {data.commentsno > 0 ? <Show /> : <Comments />}
      </Box>
    </Box>

  )
}



// <Popover width="100%" key={index}>
//           <PopoverTrigger width="100%">
//             <Button width={"97%"} margin="auto" backgroundColor={"rgb(224,224,224)"} height="13vh" mt={"1vh"}
//               borderRadius="5px">
//                 <Box display={"flex"}>
//                   <Box ><Heading>{el.id[0].toUpperCase()}</Heading></Box>
//                   <Box></Box>
//                 </Box>
//               </Button>
//           </PopoverTrigger>
//           <PopoverContent width={"337%"} margin="auto" backgroundColor={"rgb(224,224,224)"} height="8vh" mt={"1vh"}
//               borderRadius="5px" ml={"-73%"}>
//             <PopoverHeader>Confirmation!</PopoverHeader>
//           </PopoverContent>
//         </Popover>