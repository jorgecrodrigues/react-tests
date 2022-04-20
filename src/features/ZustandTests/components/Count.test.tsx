import { fireEvent, screen } from "@testing-library/react";

import Count from "./Count";
import { Wrapper } from "../../../testUtils/Wrapper";

test("renders correctly with initial value", () => {
  Wrapper(<Count />);
  const countValue = screen.getByTestId("count-value");

  expect(countValue).toBeInTheDocument();
  expect(countValue).toBeVisible();
  expect(countValue).toHaveTextContent("0");
});

test("increment and decrement value", () => {
  Wrapper(<Count />);
  const countValue = screen.getByTestId("count-value");

  fireEvent.click(screen.getByTestId("count-increment"));
  expect(countValue).toHaveTextContent("1");
  fireEvent.click(screen.getByTestId("count-decrement"));
  expect(countValue).toHaveTextContent("0");
});
