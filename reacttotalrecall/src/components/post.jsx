import React from "react";
import MyButton from "../ui-components/button/myButton";

const Post = function (props) {
  return (
    <div className="post">
      <div className="post__content">
        <h3>{props.post.title}</h3>
        <h4>{props.post.date}</h4>
        <div className="post__text">
          {props.post.content}
        </div>
        <div className="post__btns">
        <MyButton fn={()=>{props.remove(props.post)}} buttonText={"Delete"} />
        </div>
      </div>
    </div>
  );
};
export default Post;
