import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";

export default function Articles({ user }) {
  const [articles, setArticles] = useState([]);
  const [updateArticles, setUpdateArticles] = useState(0);
  const [newArticle, setNewArticle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/articles/', {
        headers: {
          'Content-Type': 'application/json',
           'Accept': 'application/json'
        }
      })
      .then((data) => {
        setArticles(data.data.articles);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateArticles]);

  const articlesComp = articles.map((article) => {
    return <Article article={article} key={article.id} />;
  });

  return (
    <div className="articles-container">
      <p className="articles-heading">Articles</p>
      {articles.length === 0 && <p>There are no articles!</p>}
      {loading ? articlesComp : <p>Loading</p>}
    </div>
  );
}
