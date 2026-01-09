import React from "react";
import ReactDOM from "react-dom/client";
import SwiggyComponentBody from "./components/SwiggyComponentBody";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
import NotAboutUS from "./components/NotAboutUS";
let AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <SwiggyComponentBody /> */}
      <NotAboutUS />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <SwiggyComponentBody />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/listRestaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
