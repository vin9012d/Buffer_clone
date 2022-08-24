import React from 'react'
import { Box, Img, Heading, Button, Text } from '@chakra-ui/react'
import { engagementdata } from '../components/engagement'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { BsFillHeartFill, } from "react-icons/bs";
import { MdChat } from "react-icons/md";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'

export const Engagement = () => {
  const ref = useRef(null)
  const [cid, scid] = useState(1)
  const [data, sdata] = useState({})
  const [a, sa] = useState(-1)
  const [b, sb] = useState(-1)


  function handleeclick(id) {
    scid(id)
    const data1 = engagementdata.find((d) => d.id === id)
    sdata(data1)
  }
  useEffect(() => {
    handleeclick(1)
  }, [])
  return (
    <Box display={"flex"}>
      <Box height={"90vh"} width={"36%"} border={"0.1px solid grey"} cursor="pointer">
        <Box height={"10%"} borderBottom={"0.1px solid grey"}>
          <Box zIndex={"222"} width="40%" margin={"auto"}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel >
                <h2 backgroundColor="gray">
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                </AccordionPanel>
              </AccordionItem>


            </Accordion>
          </Box>
        </Box>
        <Box height={"90%"} overflowY={"scroll"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"15px"} padding="3%">
          {engagementdata.length > 0 && engagementdata.map((items) => {
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
        <Box>
          <img style={{ margin: "auto", marginTop: "7vh", width: "55%" }} src="https://static.buffer.com/images/engage/inbox-empty.jpeg" alt="" />
          <Heading fontSize={"18px"} mt={"4vh"}>There are no comments on this post yet</Heading>
          <Button backgroundColor={"rgb(44,75,255)"} color={"white"} mt={"2vh"}>Engage With Next Post</Button>
        </Box>
      </Box>
    </Box>

  )
}
