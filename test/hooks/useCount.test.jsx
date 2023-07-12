import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("test on useCounter", () => {
  test("should return the default values", () => {
    // renderizar hook
    const { result } = renderHook(() => useCounter());
    // info del hook
    const { counter, increment, decrement, reset } = result.current;

    // test
    expect(counter).toBe(10); // initial value
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generate counter with the initial value = 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment, decrement, reset } = result.current;
    // test
    expect(counter).toBe(100);
  });
});
