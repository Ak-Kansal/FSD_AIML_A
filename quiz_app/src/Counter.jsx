import React, { useEffect, useState } from "react"
const Counter =() =>{
    // const Array=useState(0);
    // const count=Array[0];
    // const setCount=Array[1];

    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
     function handleIncrease(){
        setCount(count+1)
     }
     function handleDecrease(){
        setCount(count-1)
     }
     useEffect(()=>{
    setCount1(count*2)
     })
    return(
            <div>
        <h1>
        counter:{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>Counter1:{count1}</h1>
        </div>
    )
}
export default Counter