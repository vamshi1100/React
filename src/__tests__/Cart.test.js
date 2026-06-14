import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
jest.mock("../utils/noimage.png", () => "test-file-stub");
import mockTestData from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import RestaurantMenu from "./../components/RestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import Navbar from "./../components/Navbar";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockTestData);
    },
  });
});

test("should search reslist for burger text input", async () => {
  await act(async () => {
    return render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu resMenu={mockTestData} />
          <RestaurantCategory />
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
  });

  let resMenu = screen.getAllByTestId("resMenu");
  //   console.log(resMenu);
  expect(resMenu);
  let accordian = screen.getByText("Recommended");
  //   console.log(accordian);
  expect(accordian);
  fireEvent.click(accordian);

  let recommended = screen.getAllByTestId("recommended");
  // console.log(recommended.length);
  expect(recommended.length).toBe(3);

  let addBtn = screen.getAllByText("ADD+");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  let cartItemsCount = screen.getByTestId("cartItemsCount");
  console.log(cartItemsCount.textContent);
//   let cartItemsText = screen.getByText("CART 2 items");
//   console.log(cartItemsText.textContent);
expect(cartItemsCount).toHaveTextContent("CART 2 items");
});
