import App from "./App";
import { Wrapper } from "./testUtils/Wrapper";
import { screen } from "@testing-library/react";

test("renders react title", () => {
  Wrapper(<App />);
  const WelcomeTitle = screen.getByTestId("welcome-title");

  expect(WelcomeTitle).toBeInTheDocument();
  expect(WelcomeTitle).toHaveTextContent("React Tests");
  expect(WelcomeTitle).toBeVisible();
});
