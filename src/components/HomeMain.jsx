import { Box, Container, Flex, Stack, Heading, Image, Button } from '@chakra-ui/react'
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

					<Container>
						People spend, on average, almost 2.5 hours on social media every day.
						Let them find your brand more easily through these four simple steps:
					</Container>
					<Stack direction='row' spacing={4} align='center'>
						<Button colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button colorScheme='teal' variant='outline'>
							Button
						</Button>
					</Stack>
				</Box>
				<Box maxW="100vw">
					<Image src="https://buffer.com/static/misc/buffer-loop-v2.svg"
						maxW="100%"
						w="100%"
						border="1px red solid"
					/>
				</Box>

			</Flex>

			{/* Analyse part */}
			<Flex align="center" border="2px red solid">
				<Box border="solid 1px red">
					<Heading as='h2' size='xl' noOfLines={1}>
						Measure your social media performance in a few clicks
					</Heading>

					<Container>
						See what’s working and deliver high engagement content.
					</Container>
					<Stack direction='row' spacing={4} align='center'>
						<Button colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button colorScheme='teal' variant='outline'>
							Button
						</Button>
					</Stack>
				</Box>
				<Box maxW="100vw">
					<Image src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"

					/>
				</Box>

			</Flex>
		</>
	)
}

export default HomeMain