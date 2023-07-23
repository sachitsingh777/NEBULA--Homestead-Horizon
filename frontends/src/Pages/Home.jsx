import { Box, Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Hero from '../component/Hero';

const Home = () => {
  const [isHostHovered, setHostHovered] = useState(false);
  const [isGuestHovered, setGuestHovered] = useState(false);

  return (
    // <Flex
    //   width="100vw"
    //   height="100vh"
    //   align="center"
    //   justifyContent="center"
    //   backgroundImage="url('https://a0.muscache.com/im/pictures/9a9b3bfe-a620-4ee3-a44f-f028389bbd94.jpg')"
    //   backgroundSize="cover"
    // >
    //   <Center>
    //     <Box
    //       p={6}
    //       fontSize="24px"
    //       fontWeight="bold"
    //       borderRadius="md"
    //       width="300px"
    //       height="300px"
    //       bg={`rgba(255, 255, 255, ${isHostHovered ? 0.2 : 0.1})`}
    //       color="white"
    //       cursor="pointer"
    //       boxShadow={isHostHovered ? "0px 0px 2px rgba(0, 0, 255, 0.8)" : "none"}
    //       _hover={{ bg: `rgba(255, 255, 255, 0.2)`, boxShadow: "0px 0px 2px rgba(0, 0, 255, 0.8)" }}
    //       onMouseEnter={() => setHostHovered(true)}
    //       onMouseLeave={() => setHostHovered(false)}
    //     >
    //       Host
    //     </Box>
    //     <Box
    //       p={6}
    //       fontSize="24px"
    //       fontWeight="bold"
    //       borderRadius="md"
    //       width="300px"
    //       height="300px"
    //       bg={`rgba(255, 255, 255, ${isGuestHovered ? 0.2 : 0.1})`}
    //       color="white"
    //       cursor="pointer"
    //       boxShadow={isGuestHovered ? "0px 0px 2px rgba(0, 0, 255, 0.8)" : "none"}
    //       _hover={{ bg: `rgba(255, 255, 255, 0.2)`, boxShadow: "0px 0px 2px rgba(0, 0, 255, 0.8)" }}
    //       onMouseEnter={() => setGuestHovered(true)}
    //       onMouseLeave={() => setGuestHovered(false)}
    //     >
    //       Guest
    //     </Box>
    //   </Center>
    // </Flex>
    <>
    <Hero/>
    </>
  )
}

export default Home;
