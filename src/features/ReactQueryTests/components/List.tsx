import { Box, Button, Image, Text } from "@chakra-ui/react";

import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";

export default function List() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useUsers();

  useEffect(() => {
    console.log("List Mounted");
    return () => console.log("List Unmounted");
  }, []);

  return (
    <Box as="ul" m={0} p={0}>
      {data?.pages?.map((group: any, i) => (
        <Box key={i}>
          {group?.data?.map((user: any) => (
            <Box
              as="li"
              key={user.id}
              mb={4}
              alignItems="center"
              display="flex"
            >
              <Image src={user.avatar} mr={4} />
              <Text>
                {user.first_name} {user.last_name} | {user.email}
              </Text>
            </Box>
          ))}
        </Box>
      ))}
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </Button>
    </Box>
  );
}
