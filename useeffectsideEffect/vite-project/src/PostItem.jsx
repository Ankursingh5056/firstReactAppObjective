
import React from "react";


function PostItems({post}){
  return(
    <div>
      {post.map((el)=>(
        <div>
        <h2 style={{marginLeft:"50px",border:'1px solid white',borderRadius:"5px"}}><span style={{color:"red"}}>{el.id}</span>{el.title} <span>{el.body}</span></h2>
        
        </div>
      ))}
    </div>
  );
}

export default PostItems