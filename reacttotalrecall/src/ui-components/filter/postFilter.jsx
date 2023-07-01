import React from "react";
import InputType from "../input/inputType";
import MySelect from "../select/mySelect";

const PostFilter = function ({ filter, setFilter }) {
  return (
<>

<InputType placeholder={"Search..."} value={filter.query} fn ={e => setFilter({...filter, query:e.target.value})}/>
    <MySelect
    value={filter.sort}
    onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
    defaultValue="Sorting >>"
    options={[
      { value: "postTitle", name: "By Name" },
      { value: "contentText", name: "By Content" },
    ]}
  />
</>
  );
};
export default PostFilter;
