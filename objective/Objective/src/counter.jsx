import React from "react";


function Counter(){
  const[count,setCount]=React.useState(0)
  

  return(
    <>
    <h1>{count}</h1>
    <button onClick={function(){
      setCount(count+1)
    }}>increase</button>
    <button onClick={function(){
      setCount(count-1)
    }}>Decrease</button>
    </>
  );
}

export default Counter;