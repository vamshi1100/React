import React, { useRef } from 'react'
import { memo } from 'react'
import { useState } from 'react';

const UseCallbackChildFun = (props) => {
    console.log('child rendered usecalll back child function');
    let [count, setCount] = useState(0);
    let refCount = useRef(0);
    return (
        <div>
            <p>UseCallbackChildFun</p>
            <div>fn: {props.funHelper()}</div>
            <h2>value : {props.funValue}</h2>

            <button onClick={() => setCount(count + 1)}>usestate button  {count}</button>
            <h1></h1>
            <button onClick={() => refCount.current += 1}>useref button  {refCount.current}</button>

        </div>

    )
}

export default memo(UseCallbackChildFun);