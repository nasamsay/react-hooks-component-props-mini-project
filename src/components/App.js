import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

function App() {

  return (
    <div className="App">
      <header>< Header name = {blogData.name}  /></header>
      <aside>< About image = {blogData.image} about = {blogData.about} /></aside>
      <main>< ArticleList /></main>
    </div>
  );
}

export default App;
