import { Box, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box>
      <Heading data-testid="welcome-title">React Tests</Heading>
      <Box as="nav" mx={-2} display="flex">
        <Box mx={2}>
          <Link to="/">Home</Link>
        </Box>
        <Box mx={2}>
          <Link to="/zustand-tests">Zustand Tests</Link>
        </Box>
        <Box mx={2}>
          <Link to="/react-query-tests">React Query Tests</Link>
        </Box>
        <Box>
          <Link to="/google-maps-tests">Google Maps Tests</Link>
        </Box>
        <Box>
          <Link to="/dexie-db-tests">Dexie DB Tests</Link>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}
