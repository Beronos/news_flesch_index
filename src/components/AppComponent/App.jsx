import { useState, useEffect } from "react";
import "./App.css";
import NewsArticleCard from "../NewsArticleCardComponent/NewsArticleCard";
import SearchBar from "../SearchBarComponent/SearchBar";

function addIndexes(newsArticles) {
  return newsArticles.map((newsArticle) => {
    // TODO

    return {
      ...newsArticle,
      fleshIndex: 0,
      gradeLevel: "0",
      articleReadability: "0",
    };
  });
}

function App() {
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

  const handleSearch = (searchTerm) => {
    // TODO: filtering
    console.log("Search term: ", searchTerm);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <main className="news-articles-container">
        {newsArticles.map((newsArticle, i) => (
          <NewsArticleCard key={i} newsArticle={newsArticle} />
        ))}
      </main>
    </>
  );
}

export default App;
