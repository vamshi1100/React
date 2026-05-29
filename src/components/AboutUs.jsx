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
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    //console.log("parent render");
    return (
      <div className="p-6">
        <div>
          <h1 className="text-green-500 bg-black border-4  border-blue-900 text-4xl font-extrabold  italic font-serif">
            Class Practice
          </h1>
          <UserClass name="vamshi class" location="bangalore class" />
        </div>
        <div>
          <h1 className="text-primary  m-5 border-5 border-blackColor text-center">
            @theme is used to create custom design tokens in index.css:
            <p>{`
    @theme {
      --color-primary: #1e40af;
      --color-blackColor: #000000;
      --spacing-5: 5px;
      --text-custom-size: 40px;
    }
   
  `}</p>
            <p>
              {
                'usage AboutUs.jsx: <h1 className="text-primary m-5 border-2 border-blackColor text-center">  </h1>'
              }
            </p>
          </h1>

          <h1 className="text-green-500 bg-black border-4  border-blue-900 text-4xl font-extrabold  italic font-Angkor-custom">
            Function Practice
          </h1>
          <User name="vamshi function" location="bangalore fun" />
        </div>
      </div>
    );
  }
}
export default AboutUs;
