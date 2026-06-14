import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    //console.log("child constructor");

    super(props);
    this.state = {
      // count: {
      //   count1: 0,
      //   count2: 1,
      // },
      userInfo: {
        name: "dummy name",
        avatar_url: "dummmy image",
        url: "dummy github url",
        login: "dummy login id",
        user_view_type: "public",
      },
    };
  }
  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/vamshi1100");
    let jsonData = await data.json();
    debugger;
    this.setState({ userInfo: jsonData });
    //console.log("child componentDidMount");
  }
  componentDidUpdate() {
    //console.log("componentdid update");
  }
  componentWillUnmount() {
    //console.log("component is unmounted");
  }
  render() {
    let { name, avatar_url, url, login, user_view_type } = this.state.userInfo;
    // const { count1, count2 } = this.state.count;

    //console.log("child render");

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 p-10 hover:shadow-blue-200 transition-all duration-300">
          <div>
            <UserContext.Consumer>
              {(data) => (
                <h1 className="text-center text-xl font-bold text-purple-600 mb-8 tracking-wide">
                  LOGGED IN USER : {data.loggedInUser}
                </h1>
              )}
            </UserContext.Consumer>
          </div>

          <img
            src={avatar_url}
            alt="dummy image"
            className="w-52 h-52 rounded-full mx-auto border-4 border-blue-500 shadow-xl object-cover hover:scale-105 transition-transform duration-300"
          />

          <h1 className="text-4xl font-extrabold text-center text-gray-800 mt-8">
            {name}
          </h1>

          <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            <h1 className="font-semibold text-gray-700 text-lg">
              GitHub API Data URL :
            </h1>

            <a
              href={url}
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline break-all"
            >
              {url}
            </a>
          </div>

          <h1 className="text-center text-lg text-gray-700 mt-6">
            <span className="font-semibold">Login ID:</span> {login}
          </h1>

          <h1 className="text-center text-lg font-bold text-green-600 mt-3">
            USER VIEW TYPE : {user_view_type}
          </h1>
        </div>

        {/* <div className="grid-container">
          <div className="item item1">
            <h1>
              count1:{count1} count2:{count2}
            </h1>
          </div>
          <div className="item item2 text-center">
            <button
              onClick={() => {
                this.setState((prev) => ({
                  count: {
                    ...prev.count,
                    count1: prev.count.count1 + 1,
                  },
                }));
              }}
              className="w-[200px] bg-black text-white"
            >
              incrementor
            </button>
          </div>
          <div className="item item3">
            <h1>name:{this.props.name}</h1>
          </div>
          <div className="item item4">
            <h2>loaction: {this.props.location}</h2>
          </div>
        </div> */}
      </div>
    );
  }
}
export default UserClass;