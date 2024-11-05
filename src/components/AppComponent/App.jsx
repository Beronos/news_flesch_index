import { useState, useEffect } from "react";
import "./App.css";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import SearchBar from "../SearchBarComponent/SearchBar";
import { countSentences, countWords, countSyllables, computeFleschIndex, classifyArticleReadability, computeGradeLevel } from '../../utils/fleschUtils.js';

function addIndexes(newsArticles) {
  return newsArticles.map((newsArticle) => {
    const sentenceCount = countSentences(newsArticle.content);
    const wordCount = countWords(newsArticle.content);
    const syllableCount = countSyllables(newsArticle.content);
    const fleschIndex = computeFleschIndex(syllableCount, wordCount, sentenceCount);
    const gradeLevel = computeGradeLevel(syllableCount, wordCount, sentenceCount);
    const articleReadability = classifyArticleReadability(fleschIndex);

    return {
      ...newsArticle,
      fleschIndex,
      gradeLevel,
      articleReadability,
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
          <ArticleCard key={i} newsArticle={newsArticle} />
        ))}
      </main>
    </>
  );
}

export default App;
