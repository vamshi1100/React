import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About US</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
//         suscipit. Nostrum, dolores facilis doloremque adipisci, nihil dolor,
//         explicabo deserunt odio natus sint provident a?
//       </p>
//       <User name='vamshi function' location='bangalore fun'/>
//       <UserClass name='vamshi class' location='bangalore class'/>
//     </div>
//   );
// };
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor"); 
  }
  componentDidMount(){
    console.log("parent componentDidMount")
  }
  render() {
    console.log("parent render");  
    return (
      <div>
        <h1>About US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          suscipit. Nostrum, dolores facilis doloremque adipisci, nihil dolor,
          explicabo deserunt odio natus sint provident a?
        </p>
        <User name="vamshi function" location="bangalore fun" />
        <UserClass name="vamshi class" location="bangalore class" />
      </div>
    );
  }
}
export default AboutUs;
