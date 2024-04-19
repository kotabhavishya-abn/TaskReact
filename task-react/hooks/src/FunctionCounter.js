import React , {useState} from "react";
function FunctionCounter()
{
    const [count, setCount] = useState(0);

    const increase = () => setCount(count+1);
    // const decrement = () => setCount(count-1);

    return (
        <>
            <button onClick={increase}>+</button>
            <h1>{count}</h1>
            {/* <button onClick={decrement}>-</button> */}
        </>
    )
}
export default FunctionCounter;