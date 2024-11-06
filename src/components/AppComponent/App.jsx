import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import SearchBar from "../SearchBarComponent/SearchBar";
import { countSentences, countWords, countSyllables, computeFleschIndex, classifyArticleReadability, computeGradeLevel } from '../../utils/fleschUtils.js';
import FullArticle from '../FullArticle Component/FullArticle.jsx';

function addIndexes(newsArticles) {
  return newsArticles.map((newsArticle) => {
    const sentenceCount = countSentences(newsArticle.content);
    const wordCount = countWords(newsArticle.content);
    const syllableCount = countSyllables(newsArticle.content);
    const fleschIndex = computeFleschIndex(syllableCount, wordCount, sentenceCount);
    const gradeLevel = computeGradeLevel(syllableCount, wordCount, sentenceCount);
    const articleReadability = classifyArticleReadability(fleschIndex);

    const sanitizedTitle = newsArticle.title
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, ''); 

    return {
      ...newsArticle,
      id: sanitizedTitle,
      fleschIndex,
      gradeLevel,
      articleReadability,
      wordCount,       
      sentenceCount,     
      syllableCount,
    };
  });
}

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    fetch("/data/news_articles.json")
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
    <Router>
      <SearchBar onSearch={handleSearch} />
      <main className="news-articles-container">
      <Routes>
      <Route path="/" element={
            <>
              {newsArticles.map((newsArticle, i) => (
                <ArticleCard key={i} newsArticle={newsArticle} />
              ))}
            </>
          } /><Route
          path="/article/:title"
          element={<FullArticle newsArticles={newsArticles} />}
        />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
