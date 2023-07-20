import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-multipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";

// mock de hooks 
jest.mock("../../src/hooks/useFetch.jsx");
jest.mock("../../src/hooks/useCounter.jsx");

describe("test on <MultipleCustomHook>", () => {
  // mock hook counter: para todos los test tendria el mismo valor 
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    // limpiar los mocks de las pruebas
    jest.clearAllMocks();
  });

  // ================inicio test=================
  test("should initialize the component", () => {
    // mock fetch api
    // como está definido dentro de un test su valor es independiente de los otros
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    screen.debug(); // estado inicial del componente

    // test
    expect(screen.getByText("Fake Store API"));
    expect(screen.getByText("Loading ..."));
    expect(screen.getByText("Next product"));

    const netxBtn = screen.getByRole("button", { name: "Next product" });
    expect(netxBtn.disabled).toBeTruthy(); // al inicio disabled es TRUE
  });

  test("should show a product", () => {
    // mock del fetch api
    useFetch.mockReturnValue({
      data: { title: "title-test", description: "description-test" },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    screen.debug();

    // test
    expect(screen.getByText("title-test")).toBeTruthy(); // debe de existir este texto
    expect(screen.getByText("description-test")).toBeTruthy();
    const netxBtn = screen.getByRole("button", { name: "Next product" });
    expect(netxBtn.disabled).toBeFalsy(); // al inicio disabled es TRUE
  });

  test("should called the increment function", () => {
    // mock del fetch api
    useFetch.mockReturnValue({
      data: { title: "title-test", description: "description-test" },
      isLoading: false,
      hasError: null,
    });

    // sujeto de prueba
    render(<MultipleCustomHooks />);
    screen.debug();

    // referencia al btn de incrementar
    const netxBtn = screen.getByRole("button", { name: "Next product" });
    fireEvent.click(netxBtn); // simular un click

    expect(mockIncrement).toHaveBeenCalled();
  });
});
