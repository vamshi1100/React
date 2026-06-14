import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import { RestaurantCard } from "../components/RestaurantCard";
jest.mock("../utils/noimage.png", () => "test-file-stub");
import mockTestData from "../mocks/mocksTest";

test("swiggy restaurtanr card ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantCard filterSearch={mockTestData} />
      </Provider>
    </BrowserRouter>,
  );
  let name = screen.getByText("Pizza Paradise");
  // console.log(name);
  expect(name).toBeInTheDocument();
});
