import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm.jsx";

describe("test on UseForm hook", () => {
  const initialForm = { name: "nicolas", email: "nicolas@gmail.com" };

  it("should return default values", () => {
    // result es una variable asociada a renderHook
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result.current);

    // test
    expect(result.current).toEqual({
      formState: { ...initialForm },
      onResetForm: expect.any(Function),
      onInputChange: expect.any(Function),
    });
  });

  it("should set a name input form", () => {
    // mock sujeto de prueba 
    // result es una variable asociada a renderHook
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const newValueName = "new-name"

    // lanzar una accion sobre el form 
    act(() => {
      //  valores que espera el onInputChange fx { fieldName, value }
      onInputChange({ target: { name: "name", value: newValueName } });
    });

    // test
    expect(result.current.formState.name).toBe(newValueName);
  });

  it("should reset of the form", () => {
    // result es una variable asociada a renderHook
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      //  valor que espera el onInputChange fx
      onInputChange({ target: { name: "name", value: "new-name" } });
    });

    // test
    expect(result.current.formState.name).toBe("new-name");

    // reset form
    act(() => {
      onResetForm();
    });

    // test 
    expect(result.current.formState).toEqual(initialForm);
  });
});
