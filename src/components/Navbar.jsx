import { navbarLogoIcon } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  let [loginButtonval, setLoginButtonval] = useState("login");
  return (
    <div id="navbar">
      <img className="navimg navswiggylogo" src={navbarLogoIcon} alt="swiggy" />
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
        }}
      >
        {loginButtonval}
      </button>
    </div>
  );
};
export default Navbar;
