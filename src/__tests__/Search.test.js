import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import SwiggyComponentBody from "./../components/SwiggyComponentBody";
jest.mock("../utils/noimage.png", () => "test-file-stub");
import mockTestData from "../mocks/mockResListData.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
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
          <SwiggyComponentBody />
        </Provider>
      </BrowserRouter>,
    );
  });

  let resCardBeforSerch = screen.getAllByTestId("resCard");
  // console.log(resCardBeforSerch.length);
  expect(resCardBeforSerch.length).toBe(9);

  let searchBtn = screen.getByRole("button", { name: "Search" });
  //   console.log(searchBtn)
  let searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Burger" } });
  //   console.log(searchInput);
  fireEvent.click(searchBtn);
  expect(searchBtn).toBeInTheDocument();

  let resCardAfterSerach = screen.getAllByTestId("resCard");
//   console.log(resCardAfterSerach.length);
  expect(resCardAfterSerach.length).toBe(1);
});


test("Should check top rated restaurants filter", async () => {
  await act(async () => {
    return render(
      <BrowserRouter>
        <Provider store={appStore}>
          <SwiggyComponentBody />
        </Provider>
      </BrowserRouter>,
    );
  });

  let resCardBeforeFilter = screen.getAllByTestId("resCard");
//   console.log(resCardBeforeFilter.length);
  expect(resCardBeforeFilter.length).toBe(9);

  let filterTopratedBtn = screen.getByTestId("filterToprated");
  fireEvent.click(filterTopratedBtn);
  expect(filterTopratedBtn).toBeInTheDocument();

  let resCardAfterFilter = screen.getAllByTestId("resCard");
//   console.log(resCardAfterFilter.length);
  expect(resCardAfterFilter.length).toBe(6);
});
