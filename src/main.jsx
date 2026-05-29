import React, { useState } from "react";
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
import UserContext from "./utils/UserContext";
let AppLayout = () => {
  let [userName,setUserName]=useState('vamshi')
  return (
    <div>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <Navbar />
      <Outlet />
      {/* <SwiggyComponentBody /> */}
      <Footer />
      </UserContext.Provider>
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
        element:<Suspense fallback={<h1>....loading</h1>}><ContactUs flag={true}/></Suspense> ,
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
