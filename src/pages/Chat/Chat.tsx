import { VStack } from "@chakra-ui/layout";
import { MessagesList } from "./components";
import { MessageEditor } from "./components/MessageEditor";

export const Chat = ({ jwtToken }: any) => (
  <VStack>
    <MessagesList jwtToken={jwtToken} />
    <MessageEditor />
  </VStack>
);
