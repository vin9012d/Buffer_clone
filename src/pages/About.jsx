import React from 'react'
import { Box, Img, Heading, Button, Text } from '@chakra-ui/react'
import Untitled from "../Robin_img/Untitled.jpg"
import Group from "../Robin_img/Group.jpg"
import Sdop from "../Robin_img/Sdop.jpg"
import Three from "../Robin_img/Three.jpg"
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
      <Box textAlign={"center"} mt="10vh"><Button backgroundColor={"rgb(44,75,255)"} color="white">Read the Open Blog</Button></Box>
      <Box width="100%" height="40vh" mt="15vh" backgroundImage="url('https://buffer.com/static/background/white-doodle-section.png')" backgroundSize="cover"
        backgroundPosition="50% 50%" backgroundColor={"rgb(245,245,245)"} backgroundRepeat="no-repeat"
        display={"flex"} justifyContent="center" alignItems={"center"}>
          <Box display={"flex"} justifyContent="space-between" alignItems={"center"} width="70%" margin ="auto" >
            <Box textAlign={"center"}>
              <Heading color="rgb(135,194,33)" fontSize={"80px"}>84</Heading> 
              <Heading fontSize={"26px"} fontWeight="none">teammates</Heading>
            </Box>
            <Box textAlign={"center"}>
              <Heading color="rgb(250,211,42)" fontSize={"80px"}>22</Heading> 
              <Heading fontSize={"26px"} fontWeight="none">countries</Heading>
            </Box>
            <Box textAlign={"center"}>
              <Heading color="rgb(233,114,132)" fontSize={"80px"}>140,000+</Heading> 
              <Heading fontSize={"26px"} fontWeight="none">Users</Heading>
            </Box>
          </Box>
      </Box>
      <Box mt={"10vh"} textAlign={"center"}>
        <Heading>A few of the amazing brands who trust Buffer</Heading>
        <img style={{ margin: "auto", marginTop: "5vh" }} src={Untitled} alt="" />
      </Box>
      <Box textAlign={"left"} margin="auto" width={"51%"} mt="13vh" fontSize={"1rem"} lineHeight="1.6rem" color="rgb(0, 0, 0)">
        <Heading>Our Values</Heading>
        <Text mt={"5vh"}>We want to build a different type of company that’s focused not only on the bottom line, but also the happiness of our customers and team, and our personal growth along the journey. Here are the values that collectively guide our decisions and actions:</Text>
        <Box width={"100%"} height="12vh" display={"flex"} alignItems="center" justifyContent={"space-between"} mt="3vh">
          <Heading fontSize={"20px"}><span style={{ color: 'grey' }}>1&nbsp;&nbsp;&nbsp;</span>Default to transparency</Heading>
          <BsChevronRight fontWeight={"bolder"} />
        </Box>

        <Box width={"100%"} height="12vh" display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{ color: 'grey' }} >2&nbsp;&nbsp;&nbsp;</span>Cultivate positivity</Heading>
          <BsChevronRight fontWeight={"bolder"} />
        </Box>

        <Box width={"100%"} height="12vh" display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{ color: 'grey' }}>3&nbsp;&nbsp;&nbsp;</span>Show gratitude</Heading>
          <BsChevronRight fontWeight={"bolder"} />
        </Box>

        <Box width={"100%"} height="12vh" display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{ color: 'grey' }}>4&nbsp;&nbsp;&nbsp;</span>Practice reflection</Heading>
          <BsChevronRight fontWeight={"bolder"} />
        </Box>

        <Box width={"100%"} height="12vh" display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{ color: 'grey' }}>5&nbsp;&nbsp;&nbsp;</span>Improve consistently</Heading>
          <BsChevronRight fontWeight={"bolder"} />
        </Box>

        <Box width={"100%"} height="12vh" display={"flex"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={"20px"}><span style={{ color: 'grey' }}>6&nbsp;&nbsp;&nbsp;</span>Act beyond yourself</Heading>
          <BsChevronRight fontWeight={"bolder"} />
        </Box>

      </Box>

      <img style={{ marginTop: "10vh", height: "80vh", width: "100%" }} src={Group} alt="" />
      <Box textAlign={"left"} margin="auto" width={"51%"} mt="13vh" fontSize={"1rem"} lineHeight="1.6rem" color="rgb(0, 0, 0)">
        <Heading>Transparency</Heading>
        <Text mt={"5vh"}>We try our best to live up to our value of "Default to Transparency." Here's an overview of a few of the things we've made transparent at Buffer.</Text>
      </Box>
      <img style={{ marginTop: "10vh", height: "50vh", width: "100%" }} src={Sdop} alt="" />
      <Box textAlign={"left"} margin="auto" width={"51%"} mt="13vh" fontSize={"1rem"} lineHeight="1.6rem" color="rgb(0, 0, 0)">
        <Heading>Team</Heading>
        <Text mt={"5vh"}>We’re committed to building a diverse team and a work environment that’s inclusive of people of all backgrounds. Get to know the wonderful team who’s building our product, supporting our customers, and creating educational content.</Text>
      </Box>
      <img style={{ margin: "auto", marginTop: "10vh", height: "110vh", width: "45%" }} src={Three} alt="" />
      <Box textAlign={"center"} mt="10vh"><Button border="1px solid rgb(44,75,255)" color="rgb(44,75,255)">Get to know us better</Button></Box>
    </Box>
  )
}
