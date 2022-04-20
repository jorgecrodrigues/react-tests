import { FC, ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const AllTheProviders: FC = ({ children }: any) => {
  return (
    <ChakraProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  );
};

const Wrapper = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { Wrapper };
