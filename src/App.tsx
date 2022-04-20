import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// const HomePage = lazy(() => import("./features/Home/pages/Page"));
const ZustandTestsPage = lazy(
  () => import("./features/ZustandTests/pages/Page")
);

function App() {
  return (
    <ChakraProvider>
      <Heading data-testid="welcome-title">React Tests</Heading>

      <Box as="nav" mx={-2} display="flex">
        <Box mx={2}>
          <Link to="/">Home</Link>
        </Box>
        <Box mx={2}>
          <Link to="/zustand-tests">Zustand Tests</Link>
        </Box>
      </Box>

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route
          path="/zustand-tests"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ZustandTestsPage />
            </Suspense>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
