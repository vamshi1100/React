import { navbarLogoIcon } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
let Navbar = () => {
  let [loginButtonval, setLoginButtonval] = useState("LOGIN");
  const { loggedInUser } = useContext(UserContext);

  return (
    <div id="navbar" className="flex justify-between align-middle p-6">
      <img className="navimg navswiggylogo w-10 h-7" src={navbarLogoIcon} alt="swiggy" />
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
          setLoginButtonval(loginButtonval == "LOGIN" ? "LOGOUT" : "LOGIN");
        }} className="h-10 w-20"
      >
        {loginButtonval}
      </button>
      <div>{loggedInUser}</div>
    </div>
  );
};
export default Navbar;
