import { Box, Container, Heading, VStack, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { data } from "../slidingData.js"

import "./Sliding_S.css"

const Card = ({ id, avatar }) => {
	return (
		<Box>
			<VStack border="1px green solid"
				// h="350px"
				pt={100}
				pb={10}
				w="350px"
				pos="relative"
				borderRadius={10}
				boxShadow="rgb(0 0 0 / 20%) 0px 0px 30px -1px" >
				<Image
					pos="absolute"
					top={-12}
					borderRadius='full'
					boxSize='110px'
					src={avatar}
					alt='Luis Cancel'

				/>
				<Container>
					Buffer has made sharing our story and building our brand on social media so much easier.
				</Container>
				<Image
					m="-20px"
					// boxSize="150px"
					border="1px red solid"
					w={150}
					h={70}
					src="https://miro.medium.com/max/1050/1*Szxnu0tuAF0Utt6xDnBq4w.jpeg" />
				<Heading fontSize={20}>
					Luis Cancel, Managing Editor
				</Heading>
			</VStack>
		</Box>
	)
}

export default function Sliding() {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])


	return (
		
		<motion.div ref={carousel} className="carousel"
		>
			<motion.div drag="x"
				dragConstraints={{ right: 0, left: -width }}
				className="inner-carousel">

				{
					data.map((item) => {
						return (
							<Card {...item} />
						)
					})
				}
			</motion.div>
		</motion.div>
	
	)
}

{/* <VStack border="1px green solid" w="400px" >
<Image
	borderRadius='full'
	boxSize='150px'
	src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg"
	alt='Luis Cancel'
/>
<Container>
	Buffer has made sharing our story and building our brand on social media so much easier.
</Container>
<Image
	boxSize="150px"
	src="https://miro.medium.com/max/1050/1*Szxnu0tuAF0Utt6xDnBq4w.jpeg" />
<Heading fontSize={20}>
	Luis Cancel, Managing Editor
</Heading>
</VStack> */}
