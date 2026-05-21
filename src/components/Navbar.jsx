import { navbarLogoIcon } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  let [loginButtonval, setLoginButtonval] = useState("login");
  return (
    <div id="navbar" className="flex justify-between align-middle p-5">
      <img className="navimg navswiggylogo w-10 h-6" src={navbarLogoIcon} alt="swiggy" />
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <Link to="/AboutUS">
        <h1>ABOUT US</h1>
      </Link>
      <Link to="/ContactUS">
        <h1>CONTACT US</h1>
      </Link>

      <button
        id="login"
        onClick={() => {
          // loginButtonval == "login" ? "logout" : "login";
          setLoginButtonval(loginButtonval == "login" ? "logout" : "login");
        }} className="h-10 w-20"
      >
        {loginButtonval}
      </button>
    </div>
  );
};
export default Navbar;
