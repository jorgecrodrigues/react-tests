import { act, renderHook } from "@testing-library/react-hooks";

import useCountStore from "./useCountStore";

test("store works", () => {
  const { result } = renderHook(() => useCountStore());
  expect(result.current.count).toBe(0);
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(0);
});
