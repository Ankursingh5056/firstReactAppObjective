import React, { useEffect } from "react";
import PostItems from "./PostItem";

function App(){
  const[count,setCount]=React.useState(1)
  const[show, setShow] = React.useState([])
  const[isLoading,setIsLoading] = React.useState(false)
  const[error,setError] = React.useState(false)
  

  useEffect(function(){
    getData()
  },[count])

  useEffect(()=>{
    console.log("this is your fetch data", show)
  },[show])

  async function getData(){
    try{
      let receive = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`)
    
      let newReceive = await receive.json()
      setShow(newReceive)

    }catch(el){
      console.log(el)
      setError(newReceive)
      
    }

  }
   
  return(
    <div>
      <>
      <PostItems post={show}/>
      </>
     

      <button
     
      onClick={()=>{   // working or functionality next  button
        setCount(count+1);
        getData()           // we can remove this because we give it on its depandency line num 13
        }} style={{marginLeft:"50px",border:'1px solid white',borderRadius:"5px"}}>Next</button>


             


      <button
      disabled = {count==1 ? true : false}
      onClick={()=>{  // working or functionality previous button
        setCount(count-1);
        getData()           //// we can remove this because we give it on its depandency line num 13
        }} style={{marginLeft:"50px",border:'1px solid white',borderRadius:"5px",background:"lightSky"}}>pre</button>

             <p style={{marginLeft:"50px",borderRadius:"5px"}}>{count}</p>
      
    </div>


          
  );
}

export default App;