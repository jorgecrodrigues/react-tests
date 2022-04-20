import { Box, Button, Heading } from "@chakra-ui/react";

import useCountStore from "../stores/useCountStore";

export default function Count() {
  const { count, increment, decrement } = useCountStore();
  return (
    <Box data-testid="count">
      <Heading data-testid="count-value">{count}</Heading>
      <Box>
        <Button data-testid="count-decrement" onClick={decrement}>
          -
        </Button>
        <Button data-testid="count-increment" onClick={increment}>
          +
        </Button>
      </Box>
    </Box>
  );
}
