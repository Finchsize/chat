import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);

export const Login = ({ onLogin }: any) => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    onLogin({ nickname });
    navigate('chat');
  };
  return (
    <Box backgroundColor="gray.200" h="100vh">
      <Flex
        flexDirection="column"
        w="100wh"
        h="60vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={onSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      placeholder="nick"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
