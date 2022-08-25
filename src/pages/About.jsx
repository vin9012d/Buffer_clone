import React from 'react'
import { Box, Img, Heading, Button, Text } from '@chakra-ui/react'
import Untitled from "../Robin_img/Untitled.jpg"
import White from "../Robin_img/White.png"
import { BsChevronRight } from "react-icons/bs";


export const About = () => {
  return (
    <Box>
      <Box width={"100%"} height="100vh" backgroundColor={"rgb(238,157,171)"} textAlign="center" paddingTop={"10vh"}>
        <Heading >About Us</Heading>
        <img style={{ margin: "auto", marginTop: "5vh" }} src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/team/buffer-group-photo.jpg" alt="" />
      </Box>
      <Box textAlign={"left"} margin="auto" width={"51%"} mt="10vh" fontSize={"1rem"} lineHeight="1.6rem" color="rgb(0, 0, 0)">
        <Text>We’re a fully distributed team of 85 people living and working in 15 countries around the world. And we’re working to build the best products to help our customers build their brands and grow their businesses on social media.</Text>
        <Text mt="3vh">We’ve always aimed to do things a little differently at Buffer. Since the early days, we’ve had a focus on building one of the most unique and fulfilling workplaces by rethinking a lot of traditional practices.</Text>
        <Text mt="3vh">A commitment to supporting our team and our customers has helped Buffer grow from humble beginnings to now serving more than 140,000 users. Our passion for making meaningful connections flows through everything we do.</Text>
        <Text mt="3vh">We care about building a quality product, trusted relationships with our customers, and a sense of community that connects our customers and team with one another.</Text>
        <Text mt="3vh">To learn more about our approach to business and work, feel free to hop on over to our Open Blog.</Text>
      </Box>
      <Box textAlign={"center"} mt="10vh"><Button backgroundColor={"rgb(44,75,255)"}>Read the Open Blog</Button></Box>
      <Box backgroundImage="url(`../Robin_img/White.png}`)" backgroundPosition="center"
  backgroundRepeat="no-repeat"/>
      <Box mt={"10vh"} textAlign={"center"}>
        <Heading>A few of the amazing brands who trust Buffer</Heading>
        <img style={{ margin: "auto", marginTop: "5vh" }} src={Untitled} alt="" />
      </Box>
      <Box textAlign={"left"} margin="auto" width={"51%"} mt="13vh" fontSize={"1rem"} lineHeight="1.6rem" color="rgb(0, 0, 0)">
        <Heading>Our Values</Heading>
        <Text mt={"5vh"}>We want to build a different type of company that’s focused not only on the bottom line, but also the happiness of our customers and team, and our personal growth along the journey. Here are the values that collectively guide our decisions and actions:</Text>
        <Box width={"100%"} height="12vh"  display={"flex"} alignItems="center" justifyContent={"space-between"} mt="3vh">
          <Heading fontSize={"20px"}><span style={{color:'grey'}}>1&nbsp;&nbsp;&nbsp;</span>Default to transparency</Heading>
          <BsChevronRight fontWeight={"bolder"}/>
        </Box>

        <Box width={"100%"} height="12vh"  display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{color:'grey'}} >2&nbsp;&nbsp;&nbsp;</span>Cultivate positivity</Heading>
          <BsChevronRight fontWeight={"bolder"}/>
        </Box>
        
        <Box width={"100%"} height="12vh"  display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{color:'grey'}}>3&nbsp;&nbsp;&nbsp;</span>Show gratitude</Heading>
          <BsChevronRight fontWeight={"bolder"}/>
        </Box>
        
        <Box width={"100%"} height="12vh"  display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{color:'grey'}}>4&nbsp;&nbsp;&nbsp;</span>Practice reflection</Heading>
          <BsChevronRight fontWeight={"bolder"}/>
        </Box>
        
        <Box width={"100%"} height="12vh"  display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{color:'grey'}}>5&nbsp;&nbsp;&nbsp;</span>Improve consistently</Heading>
          <BsChevronRight fontWeight={"bolder"}/>
        </Box>
        
        <Box width={"100%"} height="12vh"  display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{color:'grey'}}>6&nbsp;&nbsp;&nbsp;</span>Act beyond yourself</Heading>
          <BsChevronRight fontWeight={"bolder"}/>
        </Box>
        
      </Box>

      <img style={{ marginTop: "5vh",height:"80vh",width:"120%",border:"5px solid black" }} src="https://buffer.com/static/team/team-panorama.jpg" alt="" />
      
    </Box>
  )
}
