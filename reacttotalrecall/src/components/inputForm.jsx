import React, { useState } from "react";
import MyButton from "../ui-components/button/myButton";
import InputType from "../ui-components/input/inputType";

const InputForm = function ({create}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost={
      date: new Date().toLocaleDateString(),
      postTitle:title,
      contentText: text
    }
    //from here we grab A NEW POST to bring it up with the callback fn CREATE, which enters at line 5 in destruction of props
    //it works like window from parent fn to chil fn
   create(newPost)
    setTitle("");
   setText("");
  };

  const clearForm = (e) => {
    e.preventDefault();
   setTitle("");
   setText("");
  };


  return (
    <form>
    <InputType
      type={"text"}
      placeholder={"Название поста"}
      value={title}
      fn={(e) => setTitle(e.target.value)}
    />
     <InputType
      type={"text"}
      placeholder={"Текст поста"}
      value={text}
      fn={(e) => setText(e.target.value)}
    />
   
    <MyButton buttonText={"Publish"} fn={addNewPost} />
    <MyButton buttonText={"Clear"} fn={clearForm} />
  </form>
  );
};
export default InputForm;
