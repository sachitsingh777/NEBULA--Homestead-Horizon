import { Flex, Image } from "@chakra-ui/react";

function Loader() {
  return (
    <Flex align="center" justify="center" minH="100vh" flexDir="column">
      <Image src="https://media.giphy.com/media/5YbQYuAnMfNkUU6GpT/giphy.gif" />
    </Flex>
  );
}

export default Loader;
