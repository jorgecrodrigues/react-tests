import { Box } from "@chakra-ui/react";
import List from "../components/List";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("Page mounted");
    return () => console.log("Page unmounted");
  }, []);

  return (
    <Box>
      <List />
    </Box>
  );
}
