import { useState } from "react";
import { Box, Center, HStack } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";

export const MessageEditor = ({ addMessage }: any) => {
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    addMessage({
      content: value,
    });
  };

  return (
    <Center>
      <Box position="fixed" bottom="20" width="40%" background="blue.100">
        <form onSubmit={onFormSubmit}>
          <HStack>
            <Input
              value={value}
              onChange={handleInputChange}
              placeholder="Type to start a message..."
              size="lg"
            />
            <Button type="submit" colorScheme="teal" size="lg">
              Button
            </Button>
          </HStack>
        </form>
      </Box>
    </Center>
  );
};
