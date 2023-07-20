import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe("test on useCounter hook", () => {
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

  test("should increment the counter", () => {
    // renderizar hook
    const { result } = renderHook(() => useCounter());
    // info del hook
    const { counter, increment, decrement, reset } = result.current;

    // test
    act(() => {
      increment(); // 10+1 = 11
      increment(); // 11 + 1 = 12
    });

    expect(result.current.counter).toBe(12);
  });

  test("should decrement the counter", () => {
    // renderizar hook
    const { result } = renderHook(() => useCounter());
    // info del hook
    const { counter, increment, decrement, reset } = result.current;

    // test
    act(
      () => decrement() // 10-1 = 9
    );

    expect(result.current.counter).toBe(9);
  });

  test("should reset the counter", () => {
    // renderizar hook
    const { result } = renderHook(() => useCounter());
    // info del hook
    const { counter, increment, decrement, reset } = result.current;

    // test
    act(
      () => decrement() // 10-1 = 9
    );
    expect(result.current.counter).toBe(9);

    act(() => reset());
    expect(result.current.counter).toBe(10);
  });
});
