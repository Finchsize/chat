import { Center, Stack, Text, Box } from "@chakra-ui/react";
import Moment from "react-moment";

interface MessageProps {
  authorNick: string;
  content: string;
  createdAt: Date;
}

export const MessageBox = ({ authorNick, content, createdAt }: MessageProps) => (
  <Center mt="4">
    <Box
      p="5"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="red.200"
    >
      <Stack>
        <Text fontSize="sm"> {authorNick} </Text>
        <Text fontSize="xs">
          <Moment format="HH:mm YYYY-MM-DD" date={createdAt} />
        </Text>
        <Text fontSize="xl">{content}</Text>
      </Stack>
    </Box>
  </Center>
);
