import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
  const Posts = blogData.posts
  const List = Posts.map(article => {
    return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
  });
  return (<main>
    {List}
    </main>)
  
}

export default ArticleList