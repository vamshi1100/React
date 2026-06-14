import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import TestComponent from "../components/TestComponent";
import Navbar from "../components/Navbar";

describe("unit test cases Test", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // });
  // afterAll(() => {
  //   console.log("after All");
  // });

  // afterEach(() => {
  //   console.log("afterEach");
  // });

  test("renders TestComponent", () => {
    // console.log("renders TestComponent");
    render(<TestComponent />);
    // console.log(screen.getByText("TestComponent"));
    expect(screen.getByText("TestComponent")).toBeInTheDocument();
  });

  test("navbar renderng test login logout ", () => {
    // console.log("navbar renderng test login logout");
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    let loginButton = screen.getByRole("button", { name: "LOGIN" });
    // console.log(loginButton);
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "LOGOUT" });
    expect(logoutButton).toBeInTheDocument();
  });
});
