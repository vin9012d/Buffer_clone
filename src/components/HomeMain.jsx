
import { Box, Container, Flex, Stack, VStack, Text, Heading, Image, Button } from '@chakra-ui/react'

import React from 'react'
import Sliding from './Sliding_S'

const HomeMain = () => {
	return (
		<>
			{/* #1 video button & content */}
			<Flex align="center" p="5% 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>
				<Box >
					<Heading as='h2' size='xl' noOfLines={2}>
						Grow your audience on social and beyond
					</Heading>

					<Container m="2rem -1rem">
						Buffer helps you build an audience organically.
						We’re a values-driven company that provides affordable, intuitive,
						marketing tools for ambitious people and teams.
					</Container>
					<Stack direction={["column", "column", "row"]} spacing={4} align='center'>
						<Button colorScheme='blue' variant='solid'>
							Get started now
						</Button>
						<Button colorScheme='blue' variant='outline'>
							Watch video
						</Button>
					</Stack>
				</Box>
				<Box>
					<Image
						border="1px green solid"
						src="https://buffer.com/static/illustrations/all-channels-3.webp"
					/>
				</Box>
			</Flex>

			{/* Be where your customers are */}
			<Flex direction="column">
				<Box d="flex" direction="column" align="center">
					<Heading as='h2' size='xl' noOfLines={1}>
						Be where your customers are
					</Heading>


					<Container mt="3rem" mb="3rem">
						People spend, on average, almost 2.5 hours on social media every day.
						Let them find your brand more easily through these four simple steps:
					</Container>




				</Box>
				<Box maxW="100vw">
					<Image src="https://buffer.com/static/misc/buffer-loop-v2.svg"
						maxW="100%"
						w="100%"

						p="1rem 0"



						border="1px red solid"
					/>
				</Box>

			</Flex>

			{/* Analyse part */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>

				<Box border="solid 1px red" >
					<Heading fontSize={20} color="#2039f4">
						1. ANALYSE
					</Heading>
					<Heading as='h2' size='xl' noOfLines={2} m="1rem 0">
						Measure your social media performance in a few clicks
					</Heading>

					<Container m="1rem -1rem">


						See what’s working and deliver high engagement content.
					</Container>
					<Stack direction={["column", "column", "row"]} spacing={4} align='center'>
						<Button colorScheme='teal' variant='solid'>
							Get started now
						</Button>
						<Button colorScheme='teal' variant='outline'>
							Learn More
						</Button>
					</Stack>
				</Box>

				<Box w="80%">

					<Image
						border="1px red solid"

						src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"

					/>
				</Box>

			</Flex>


			{/* ....plan and publish.... */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column-reverse", "column-reverse", "row"]}>
				<Box w="80%">
					<Image
						border="1px red solid"

						src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"

					/>
				</Box>
				<Box border="solid 1px red" >
					<Heading fontSize={20} color="#2039f4">
						2. PLAN AND PUBLISH YOUR CONTENT
					</Heading>
					<Heading as='h2' size='xl' noOfLines={2} m="1rem 0">
						Collaborate and plan your campaigns
					</Heading>

					<Container m="1rem -1rem">
						Schedule your posts in advance so you can focus on other things.
					</Container>
					<Stack direction={["column", "column", "row"]} spacing={4} align='center'>
						<Button colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button colorScheme='teal' variant='outline'>
							Button
						</Button>
					</Stack>
				</Box>


			</Flex>

			{/* Engage */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>
				<Box border="solid 1px red">
					<Heading fontSize={20} color="#2039f4">
						3. ENGAGE
					</Heading>
					<Heading as='h2' size='xl' noOfLines={2}>
						Respond to comments twice as fast
					</Heading>

					<Container m="2rem -1rem">
						Skip to important comments with the help of labels and hotkeys.



					</Container>
					<Stack direction={["column", "column", "row"]} spacing={4} align='center'>
						<Button colorScheme='blue' variant='solid'>
							Get started now
						</Button>
						<Button colorScheme='blue' variant='outline'>

							Learn more
						</Button>
					</Stack>
				</Box>
				<Box w="80%">
					<Image
						border="1px green solid"
						src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"
					/>
				</Box>
			</Flex>

			{/* ...cards.... */}
			<Sliding />

			{/* ...buffer achievements */}
			<Flex justify="space-around" direction={["column", "column", "column", "row"]}>
				<VStack>
					<Heading color="#2039f4">
						10 years
					</Heading>
					<Text>
						in business
					</Text>
				</VStack>
				<VStack>
					<Heading color="#2039f4">
						1,40000
					</Heading>
					<Text>
						users
					</Text>
				</VStack>
				<VStack>
					<Heading color="#2039f4">
						100k+
					</Heading>
					<Text>
						monthly blog readers
					</Text>
				</VStack>
				<VStack>
					<Heading color="#2039f4">
						1.2m+
					</Heading>
					<Text>
						social followers
					</Text>
				</VStack>
			</Flex>

			{/* help center navigator */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column-reverse", "column-reverse", "row"]} gap="1rem">
				<Box w="80%">
					<Image
						border="1px green solid"
						src="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"
					/>
				</Box>
				<Box border="solid 1px red">
					<Heading as='h2' size='xl' noOfLines={2}>
						And we are here to help
					</Heading>

					<Container m="2rem -1rem">
						Our customer advocates are standing by 24/7 to support you via email and social media.
						We also have a comprehensive, regularly updated help center for those who prefer to find help themselves.
					</Container>
					<Stack direction={["column", "column", "row"]} spacing={4} align='center'>

						<Button colorScheme='blue' variant='outline'>
							Visit our help center
						</Button>
					</Stack>
				</Box>

			</Flex>
			{/* ...marketing partners */}
			<Box w="50%" m="auto" textAlign="center" border="1px solid red" gap="20px">
				<Heading mb="2rem">
					An official marketing partner of the industry leaders
				</Heading>
				<Flex direction={["column", "column", "row"]} justify="center" align="center" gap="30px">
					<Image
						w="100px"
						h="70px"
						src="https://buffer.com/static/ui/meta-business-partner@2x-2.png"
					/>
					<Image
						w="100px"
						h="70px"
						src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png"
					/>
					<Image
						w="100px"
						h="70px"
						src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png"
					/>
				</Flex>
			</Box>


			{/* 140,000+ people like you use buffer */}

			<Box bg="#2039f4" textAlign="center" p="5% 20%" >
				<Heading color="white" fontSize="30px" m="2rem 0">
					140,000+ people like you use Buffer to build their brand on social media every month
				</Heading>
				<Button p="6%" bg="rgb(233, 114, 132)" color="white"
					_hover={{
						bg: "rgb(178, 19, 43)",

					}}
				>
					Get started now
				</Button>

			</Box>


		</>
	)
}

export default HomeMain