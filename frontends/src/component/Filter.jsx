import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Filter = () => {
  return (
    <Flex gap={"5"} alignItems="center">
      <Box>
        <Center>
          <Box h="40px" w="40px">
            <Image src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg" />
          </Box>
        </Center>
        <Text>Towers</Text>
      </Box>
      <Box>
        <Center>
          <Box h="40px" w="40px">
            <Image src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg" />
          </Box>
        </Center>
        <Text>Damnusi</Text>
      </Box>
      <Box>
        <Center>
          <Box h="40px" w="40px">
            <Image src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" />
          </Box>
        </Center>
        <Text>Rooms</Text>
      </Box>
      <Box>
        <Center>
          <Box h="40px" w="40px">
            <Image src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" />
          </Box>
        </Center>
        <Text>Farms</Text>
      </Box>
      <Box>
        <Center>
          <Box h="40px" w="40px">
            <Image src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" />
          </Box>
        </Center>
        <Text>Amazing views</Text>
      </Box>
     
    </Flex>
  );
};

export default Filter;
