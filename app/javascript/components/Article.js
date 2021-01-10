import React from "react";

export default function Article({ article }) {
  if (!article) {
    return <div />;
  }

  return (
    <div className="article">
        <div className="user-name"><b>Title: </b>{article.title}</div>
        <div className="article-actions">{article.content}</div>
    </div>
  );
}
