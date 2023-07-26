import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("test on MainApp component / test routes", () => {
  test("should display HomePage component", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();

    // test
    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should display LoginPage component", () => {
    // sujeto de prueba inicializado en la ruta /login
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();

    // test
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });

  test("should display AboutPage component", () => {
    // sujeto de prueba inicializado en la ruta /login
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();

    // test
    expect(screen.getByText("AboutPage")).toBeTruthy();
  });

  test("should display HomePage component", () => {
    // sujeto de prueba inicializado en la ruta /login
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();

    // test
    expect(screen.getByText("HomePage")).toBeTruthy();
  });
});
