import App from "./App";
import { Wrapper } from "./testUtils/Wrapper";
import { screen } from "@testing-library/react";

test("renders react title", async () => {
  Wrapper(<App />);
  const WelcomeTitle = await screen.getByTestId("welcome-title");

  expect(WelcomeTitle).toBeInTheDocument();
  expect(WelcomeTitle).toHaveTextContent("React Tests");
  expect(WelcomeTitle).toBeVisible();
});
