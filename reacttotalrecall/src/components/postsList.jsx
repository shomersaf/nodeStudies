import React, { useState } from "react";
import Post from "./post";


const PostsList = function ({postsArr, remove}) {
  if(postsArr.length){
    return (
      <div className="postsList">
      <h2 style={{textAlign:"center"}}>Israeli News for Today:</h2>
       {postsArr.map(item =>
         <Post remove={remove} key={item.postTitle} post={{title:item.postTitle, content:item.contentText, date:item.date }}/> 
       )}</div>
     );
  }else{
    return(
      <h2>Posts not Found</h2>
    )
  }
  
};
export default PostsList;
