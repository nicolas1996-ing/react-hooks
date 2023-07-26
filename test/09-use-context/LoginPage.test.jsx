import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

const newUser = { id: 1, name: "juan", email: "juan@gmail.com" };

describe("test on LoginPageComponent", () => {
  test("should display the component without the user", () => {
    // sujeto de prueba
    // al componente LoginPage hay que proveerle el contexto
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();

    // acciones sobre el sujeto de prueba
    const preTag = screen.getByLabelText("pre-test-id");

    // test
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call setUser when you click the btn", () => {
    // al componente LoginPage hay que proveerle el contexto
    // mock del contexto: user setUser 
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();

    // acciones sobre el sujeto de prueba
    const preTag = screen.getByLabelText("pre-test-id");
    const btn = screen.getByLabelText("btn-test-id");

    // test 1.
    expect(preTag.innerHTML).toBe("null");

    // simular click
    fireEvent.click(btn);

    // test 2.
    expect(setUserMock).toHaveBeenCalled()
    expect(setUserMock).toHaveBeenCalledWith(newUser)
  });
});
