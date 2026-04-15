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
          <h1>
            count1:{count1} count2:{count2}
          </h1>
          <button
            onClick={() => {
              this.setState((prev) => ({
                count: {
                  ...prev.count,
                  count1: prev.count.count1 + 1,
                },  
              }));
            }}
          >
            incrementor
          </button>
          <h1>name:{this.props.name}</h1>
          <h2>loaction: {this.props.location}</h2>
        </div>
        <div>
          <h1>{name}</h1>
          <a href={url}>github Link</a>
          <img src={avatar_url} alt="dummy image" />
        </div>
      </div>
    );
  }
}
export default UserClass;
