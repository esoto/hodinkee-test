import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ArticleForm({ newArticle }) {
  const [article, setArticle] = useState(newArticle);

  const handleSubmit = (e) => {
    e.preventDefault();
    var token = document.getElementsByName("csrf-token")[0].content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

    axios
      .post(`/articles`, {
        article,
      })
      .then((response) => {
        console.log("Server response:", response);
          window.location = "/articles"
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Write an article</p>

      </div>
      <div>
          <label> Title: </label>
        <input
          type="text"
          name="article.title"
          className="article-title"
          value={article.title}
          onChange={(e) => {
            setArticle({ title: e.target.value, content: article.content });
          }}
        />
      </div>
      <div>
        <label> Content: </label>
        <textarea
          maxLength="200"
          type="text"
          name="article"
          className="article-textarea"
          value={article.content}
          placeholder='Enter text here...'
          onChange={(e) => {
            setArticle({ title: article.title, content: e.target.value });
          }}
        />
      </div>

      <button type="submit">
        Save
      </button>
    </form>
  );
}
