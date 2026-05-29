import styles from "./../contactUsStyles.module.css";
import StyledButton from "../styledComponents/Button.styles";
import { StyledButtonProps ,FancyButtonInherit} from "../styledComponents/Button.styles";
import GlobalStyles from "../styledComponents/GlobalStyles";
import UserContext from "../utils/UserContext";
// import { useContext } from "react";
const ContactUs = (props) => {
  let color = props.flag == true ? "green" : "red";
  // let { loggedInUser, setUserName } = useContext(UserContext);
  // debugger;
  return (
    <div className="p-6">
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
          <div>
            <h1>contact us : {data.loggedInUser}</h1>
            <input
              type="text"
              className="border-black border-2"
              value={data.loggedInUser}
              onChange={(e) => data.setUserName(e.target.value)}
            />
          </div>
        )}
      </UserContext.Consumer>

      <h1
        style={{ color: color, fontSize: "104px" }}
        className={`${styles.paragraph} ${props.flag ? styles.active : ""}`}
      >
        contact us{props.flag}
      </h1>
      {/* styling components using separate component stylesheet ,here we can observe paragragh styles applied in contactUs.jsx page 
      is also available in Footer.jsx component  paragragh styles because of ***paragraph*** same class used in footer and ContactUs 
      componets to avoid this use module.css*/}
      <p className={styles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        cumque enim nostrum reiciendis veniam esse pariatur, fuga sint beatae
        natus tenetur in minima, doloremque quo.
      </p>
      <StyledButton>Call ME</StyledButton>
      <StyledButtonProps flag={true}>Call ME</StyledButtonProps>
      <FancyButtonInherit flag={false}>Call ME</FancyButtonInherit>

    </div>
  );
};
export default ContactUs;
