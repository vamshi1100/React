import styles from "./../contactUsStyles.module.css";
import StyledButton from "../styledComponents/Button.styles";
import { StyledButtonProps ,FancyButtonInherit} from "../styledComponents/Button.styles";
import GlobalStyles from "../styledComponents/GlobalStyles";

const ContactUs = (props) => {
let color=props.flag==true?"green":"red";
debugger;
  return (
    <div className="p-6">
      <GlobalStyles />
      {/* inline style */}
      
      <h1 style={{color:color,fontSize:"104px"}} className={`${styles.paragraph} ${props.flag?styles.active:""}`}>contact us{props.flag}</h1>
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
