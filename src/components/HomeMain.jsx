import { Box, Container, Flex, Stack, VStack, Heading, Image, Button } from '@chakra-ui/react'
import React from 'react'

const HomeMain = () => {
	return (
		<>
			{/* #1 video button & content */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>
				<Box border="solid 1px red">
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

			{/* How to reach your customers */}
			<Flex direction="column">
				<Box d="flex" direction="column" justifyContent="center">
					<Heading as='h2' size='xl' noOfLines={1}>
						Be where your customers are
					</Heading>

					<Container mt="2rem" mb="4rem">
						People spend, on average, almost 2.5 hours on social media every day.
						Let them find your brand more easily through these four simple steps:
					</Container>
					{/* <VStack direction='row' spacing={4} align='center' border="1px solid red">
						<Button colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button colorScheme='teal' variant='outline'>
							Button
						</Button>
					</VStack> */}
				</Box>
				<Box maxW="100vw">
					<Image src="https://buffer.com/static/misc/buffer-loop-v2.svg"
						maxW="100%"
						w="100%"
						pt="4rem"
						pb="4rem"
						border="1px red solid"
					/>
				</Box>

			</Flex>

			{/* Analyse part */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>
				<Box border="solid 1px red">
					<Heading as='h2' size='xl' noOfLines={2} >
						Measure your social media performance in a few clicks
					</Heading>

					<Container m="2rem -1rem">
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
				<Box width="70%">
					<Image
						border="1px red solid"

						src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"

					/>
				</Box>

			</Flex>

			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>
				<Box>
					<Image
						border="1px green solid"
						src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"
					/>
				</Box>
				<Box border="solid 1px red">
					<Heading as='h2' size='xl' noOfLines={2}>
						Collaborate and plan your campaigns
					</Heading>

					<Container m="2rem -1rem">
						Schedule your posts in advance so you can focus on other things.
					</Container>
					<Stack direction={["column", "column", "row"]} spacing={4} align='center'>
						<Button colorScheme='blue' variant='solid'>
							Get started now
						</Button>
						<Button colorScheme='blue' variant='outline'>
							Learn More
						</Button>
					</Stack>
				</Box>

			</Flex>


			{/* Engage */}
			<Flex align="center" border="2px red solid" p="0 6%" textAlign={["center", "center", "left"]} direction={["column", "column", "row"]}>
				<Box border="solid 1px red">
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
				<Box>
					<Image
						border="1px green solid"
						src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"
					/>
				</Box>
			</Flex>
		</>
	)
}

export default HomeMain