import { navbarLogoIcon } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineOffline from "./../utils/useOnlineOffline";

let Navbar = () => {
  let [loginButtonval, setLoginButtonval] = useState("LOGIN");
  let onlinestatus = useOnlineOffline();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      id="navbar"
      className="flex justify-between items-center px-8 py-4 mx-4 mt-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl"
    >
      <img
        className="navimg navswiggylogo w-14 h-10 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
        src={navbarLogoIcon}
        alt="swiggy"
      />

      <Link to="/">
        <h1 className="font-semibold tracking-wide hover:text-yellow-300 hover:scale-105 transition-all duration-300">
          HOME
        </h1>
      </Link>

      <Link to="/AboutUS">
        <h1 className="font-semibold tracking-wide hover:text-yellow-300 hover:scale-105 transition-all duration-300">
          ABOUT ME
        </h1>
      </Link>

      <Link to="/ContactUS">
        <h1 className="font-semibold tracking-wide hover:text-yellow-300 hover:scale-105 transition-all duration-300">
          CONTACT US
        </h1>
      </Link>

      <Link
      data-testid='cartItemsCount'
        to={"/Cart"}
        className="font-semibold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        CART {cartItems.length} items
      </Link>
      {/* <Link
        to={"/Hooks"}
        className="font-semibold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        Hooks
      </Link> */}

      <div className="flex items-center gap-2 font-medium bg-white/10 px-4 py-2 rounded-lg">
        {loggedInUser}
        <button>{onlinestatus == "online" ? "💚" : "❤️"}</button>
      </div>

      <button
        id="login"
        name="LOGIN"
        onClick={() => {
          setLoginButtonval(
            loginButtonval == "LOGIN" ? "LOGOUT" : "LOGIN"
          );
        }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
      >
        {loginButtonval}
      </button>
    </div>
  );
};

export default Navbar;