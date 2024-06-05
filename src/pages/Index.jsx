import { Container, VStack, Text, Code, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.800", "gray.900");
  const textColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const iconColor = useColorModeValue("yellow.500", "blue.300");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={textColor}>
      <IconButton aria-label="Toggle theme" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} color={iconColor} alignSelf="flex-end" m={4} />
      <VStack spacing={4} align="flex-start">
        <Code p={4} borderRadius="md" w="100%" bg={bgColor} color={textColor}>
          {`{
  "0KB.ORG": {
    "error": false,
    "packet-size": "0KB",
    "response": "Coming soon...",
    "site": "https://0KB.org",
    "domain-admin": "0@0KB.ORG"
  },
  "Contact": {
    "telegram": "https://t.me/zerokilobytes",
    "site": "https://johnle.org",
    "github": "https://github.com/9-5",
    "linkedin": "https://linkedin.com/in/johnle",
    "email": "john@johnle.org"
  },
  "Projects": {
    "portfolio": "Coming soon."
  }
}`}
        </Code>
      </VStack>
    </Container>
  );
};

export default Index;
