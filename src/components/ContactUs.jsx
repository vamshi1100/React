import styles from "./../contactUsStyles.module.css";
import StyledButton from "../styledComponents/Button.styles";
import {
  StyledButtonProps,
  FancyButtonInherit,
} from "../styledComponents/Button.styles";
import GlobalStyles from "../styledComponents/GlobalStyles";
import UserContext from "../utils/UserContext";
// import { useContext } from "react";
const ContactUs = (props) => {
  let color = props.flag == true ? "green" : "red";
  // let { loggedInUser, setUserName } = useContext(UserContext);
  // debugger;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
        <GlobalStyles />
        {/* inline style */}

        {/* <input
          type="text"
          className="border-black border-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        /> */}

        <UserContext.Consumer>
          {(data) => (
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md mb-8">
              <h1 className="text-2xl font-bold text-blue-700 mb-4">
                Contact Us : {data.loggedInUser}
              </h1>
              <input
                type="text"
                className="border-2 border-blue-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={data.loggedInUser}
                onChange={(e) => data.setUserName(e.target.value)}
              />
            </div>
          )}
        </UserContext.Consumer>

        <h1
          style={{ color: color, fontSize: "104px" }}
          className={`${styles.paragraph} ${
            props.flag ? styles.active : ""
          } text-center font-black tracking-wide drop-shadow-lg mb-8`}
        >
          contact us{props.flag}
        </h1>
        {/* styling components using separate component stylesheet ,here we can observe paragragh styles applied in contactUs.jsx page 
        is also available in Footer.jsx component  paragragh styles because of ***paragraph*** same class used in footer and ContactUs 
        componets to avoid this use module.css*/}
        <p
          className={`${styles.paragraph} text-lg leading-8 bg-slate-50 p-6 rounded-2xl shadow-md`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          cumque enim nostrum reiciendis veniam esse pariatur, fuga sint beatae
          natus tenetur in minima, doloremque quo.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <StyledButton>Call ME</StyledButton>
          <StyledButtonProps flag={true}>Call ME</StyledButtonProps>
          <FancyButtonInherit flag={false}>Call ME</FancyButtonInherit>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
