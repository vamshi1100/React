import React from "react";
import ReactDOM from "react-dom/client";
import { lazy,Suspense } from "react";
import SwiggyComponentBody from "./components/SwiggyComponentBody";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
let AboutUs=lazy(()=>{return import("./components/AboutUs")});
let ContactUs=lazy(()=>{return import("./components/ContactUs")});
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
let AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <SwiggyComponentBody /> */}
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
        element:<Suspense fallback={<h1>....loading</h1>}><AboutUs /></Suspense> ,
      },
      {
        path: "/ContactUs",
        element:<Suspense fallback={<h1>....loading</h1>}><ContactUs /></Suspense> ,
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
