import { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/layout";
import { MessageBox } from "./MessageBox";
import axios from "axios";

export interface MessageObject {
  id: number;
  authorNick: string;
  content: string;
  createdAt: Date;
}

export const messages = [
  {
    id: 1,
    authorNick: "Shrek",
    content: "Dobra, ty zajmij się smokiem, ja biorę na siebie schody",
    createdAt: new Date("1995-12-17T03:24:00"),
  },
];

export const MessagesList = ({jwtToken} : any) => {

  let [mess, setMessages] = useState(messages);

  const config = {
    headers: { Authorization: `Bearer ${jwtToken}` }
  };

  const getMessages = async () => {
    const messages = await axios.get(
      "http://localhost:8080/messages",
      config
    );
    setMessages(messages.data.results);
  };

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <VStack mb="170">
      {mess.map(({ id, authorNick, content, createdAt }) => (
        <MessageBox
          key={id}
          authorNick={authorNick}
          content={content}
          createdAt={createdAt}
        />
      ))}
    </VStack>
  );
};
