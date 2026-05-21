import React, { useState } from "react";

const User = (props) => {
  let [count1, setCount1] = useState(0);
  let [count2] = useState(1);

  return (
    <div className="grid-container">
      <div className="item item1">
        <h1>
          count1:{count1} count2:{count2}
        </h1>
      </div>
      <div className="item item2">
              <button
        onClick={() => {
          //should not  change the state directly
          //setCount1(++count1);
          setCount1(count1 + 1);
        }}>incrementor</button>
      </div>
      <div className="item item3"><h1>name:{props.name}</h1></div>
      <div className="item item4"><h2>location:{props.location}</h2></div>
      {/* <div className="item item5"> hello vamshi reddy</div> */}


    </div>
  );
};

export default User;
