import { VStack } from "@chakra-ui/layout";
import { MessageBox } from "./MessageBox";

const messages = [
    {
        id: 1,
        authorNick: 'Shrek',
        content: 'Dobra, ty zajmij się smokiem, ja biorę na siebie schody',
        createdAt: new Date('1995-12-17T03:24:00'),
    },
    {
        id: 2,
        authorNick: 'Osioł',
        content: 'Znajdę je, skubane, i skopię im poręcz tak, że nie będą wiedziały, którędy na górę, a co!',
        createdAt: new Date('1995-12-17T03:24:00'),
    },
]

export const Messages = () => (
  <VStack>
    {messages.map(({ authorNick, content, createdAt }) => (
      <MessageBox
        authorNick={authorNick}
        content={content}
        createdAt={createdAt}
      />
    ))}
  </VStack>
);
