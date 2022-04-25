import { FC, ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RenderOptions, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const AllTheProviders: FC = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

const Wrapper = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { Wrapper, AllTheProviders };
