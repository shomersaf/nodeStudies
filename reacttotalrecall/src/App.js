import React, { useMemo, useState } from "react";
import "./App.css";
import PostsList from "./components/postsList";
import InputForm from "./components/inputForm";
import PostFilter from "./ui-components/filter/postFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      date: new Date().toLocaleDateString(),
      postTitle: "Беспорядки во Франции: задержаны около 1000 человек",
      contentText:
        "Продолжаются беспорядки во Франции, начавшиеся после убийства 27 июня полицейским 17-летнего водителя алжирско-марокканского происхождения в парижском пригороде Нантер. В ночь на 1 июля задержаны 994 участника протеста, сообщило МВД страны, хотя в полиции заявили, что накал страстей и масштаб беспорядков идет на спад. Для сравнения: прошлой ночью были задержаны 667 человек.",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  //here is the callback fn, which graps A NEW POST from child component
  //and lifts it up to the parent App to become accessible for POST COMPONENT
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.postTitle !== post.title));
  };

  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts works");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.postTitle.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <h1>React Total Recall</h1>
      <InputForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
        <PostsList remove={removePost} postsArr={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
