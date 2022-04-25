import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./features/Home/pages/Page";
import Layout from "./shared/components/Layout/Layout";
import NoMatch from "./shared/components/NoMatch/NoMatch";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const ZustandTestsPage = lazy(
  () => import("./features/ZustandTests/pages/Page")
);
const ReactQueryTestsPage = lazy(
  () => import("./features/ReactQueryTests/pages/Page")
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="zustand-tests"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ZustandTestsPage />
                </Suspense>
              }
            />
            <Route
              path="react-query-tests"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ReactQueryTestsPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
