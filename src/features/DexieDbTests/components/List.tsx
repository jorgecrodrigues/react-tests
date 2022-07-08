import { Friend, db } from "../stores/db";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

import { useLiveQuery } from "dexie-react-hooks";

export default function List() {
  const friends = useLiveQuery(() => db.friends.orderBy("name").toArray());
  return (
    <Table variant="striped" maxW={400}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        {friends?.map((friend: Friend) => (
          <Tr key={friend.id}>
            <Td>{friend.name}</Td>
            <Td>{friend.age}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
