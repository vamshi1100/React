import React, { useState } from "react";

const User = (props) => {
  let [count1, setCount1] = useState(0);
  let [count2] = useState(1);

  return (
    <div>
      <h1>
        count1:{count1} count2:{count2}
      </h1>
      <button
        onClick={() => {
          //should not  change the state directly
          //setCount1(++count1);
          setCount1(count1 + 1);
        }}
      >
        incrementor
      </button>
      <h1>name:{props.name}</h1>
      <h2>location:{props.location}</h2>
    </div>
  );
};

export default User;
