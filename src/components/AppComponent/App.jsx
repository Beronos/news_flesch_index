import { useState, useEffect } from "react";
import "./App.css";
import ArticleCard from "../ArticleCardComponent/ArticleCard.jsx";
import SearchBar from "../SearchBarComponent/SearchBar";
import { addIndexes } from "../../utils/fleschUtils.js";
import FullArticle from "../FullArticleComponent/FullArticle.jsx";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);

  useEffect(() => {
    fetch("/data/news_articles.json")
      .then((result) => result.json())
      .then((data) => {
        const newsArticlesData = addIndexes(data);
        setNewsArticles(newsArticlesData);
        setFilteredArticles(newsArticlesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (selectedGrade) => {
    if (selectedGrade === "All Grades") {
      setFilteredArticles(newsArticles);
    } else {
      const filtered = newsArticles.filter(
        (article) => article.articleReadability === selectedGrade
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="news-articles-app">
      <SearchBar onSearch={handleSearch} />
      {selectedNewsArticle ? (
        <FullArticle
          newsArticle={selectedNewsArticle}
          onClick={() => setSelectedNewsArticle(null)}
        />
      ) : (
        <main className="news-articles-container">
          {filteredArticles.map((newsArticle, i) => (
            <ArticleCard
              key={i}
              newsArticle={newsArticle}
              onClick={() => setSelectedNewsArticle(newsArticle)}
            />
          ))}
        </main>
      )}
    </div>
  );
}

export default App;
