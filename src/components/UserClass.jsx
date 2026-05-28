import React from "react";
import User from "./User";
class UserClass extends React.Component {
  constructor(props) {
    console.log("child constructor");

    super(props);
    this.state = {
      count: {
        count1: 0,
        count2: 1,
      },
      userInfo: {
        name: "dummy name",
        avatar_url: "dummmy image",
        url: "dummy github url",
      },
    };
  }
  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/vamshi1100");
    let jsonData = await data.json();
    this.setState({ userInfo: jsonData });
    console.log("child componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentdid update");
  }
  componentWillUnmount() {
    console.log("component is unmounted");
  }
  render() {
    let { name, avatar_url, url } = this.state.userInfo;
    const { count1, count2 } = this.state.count;

    console.log("child render");

    return (
      <div>
        <div>
          <h1>Name: {name}</h1>
          <div className="flex mr-2 gap-1">
            <h1>gitHub api data url :</h1>
            <a href={url} className="text-blue-600 hover:underline">
              {url}
            </a>
          </div>

          <img src={avatar_url} alt="dummy image" />
        </div>

        <div className="grid-container">
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
        </div>
      </div>
    );
  }
}
export default UserClass;
