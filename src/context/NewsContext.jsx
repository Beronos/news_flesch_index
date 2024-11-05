// src/context/NewsContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create a context for news articles
export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    fetch("data/news_articles.json")
      .then((result) => result.json())
      .then((data) => {
        const newsArticlesData = addIndexes(data);
        setNewsArticles(newsArticlesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addIndexes = (newsArticles) => {
    return newsArticles.map((newsArticle) => ({
      ...newsArticle,
      fleshIndex: 0,
      gradeLevel: "0",
      articleReadability: "0",
    }));
  };

  return (
    <NewsContext.Provider value={{ newsArticles }}>
      {children}
    </NewsContext.Provider>
  );
};
