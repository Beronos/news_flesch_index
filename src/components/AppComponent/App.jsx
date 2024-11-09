import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import SearchBar from "../SearchBarComponent/SearchBar";
import { countSentences, countWords, countSyllables, computeFleschIndex, classifyArticleReadability, computeGradeLevel } from '../../utils/fleschUtils.js';
import FullArticle from '../FullArticle Component/FullArticle.jsx';

// Function to add readability indexes to articles
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
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetch("/data/news_articles.json")
      .then((result) => result.json())
      .then((data) => {
        const newsArticlesData = addIndexes(data);
        setNewsArticles(newsArticlesData);
        setFilteredArticles(newsArticlesData); // Set filtered articles initially to all
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (selectedGrade) => {
    // If All Grades is selected, show all articles
    if (selectedGrade === "All Grades") {
      setFilteredArticles(newsArticles);
    } else {
      // Filter articles by grade level
      const filtered = newsArticles.filter((article) => {
        const articleGrade = article.gradeLevel;
        
        // Define grade ranges based on selected grade level
        if (selectedGrade === "5th grade" && articleGrade >= 5 && articleGrade < 6) return true;
        if (selectedGrade === "6th grade" && articleGrade >= 6 && articleGrade < 7) return true;
        if (selectedGrade === "7th grade" && articleGrade >= 7 && articleGrade < 8) return true;
        if (selectedGrade === "8th & 9th grade" && articleGrade >= 8 && articleGrade < 10) return true;
        if (selectedGrade === "10th to 12th grade" && articleGrade >= 10 && articleGrade < 13) return true;
        if (selectedGrade === "College" && articleGrade >= 13 && articleGrade < 16) return true;
        if (selectedGrade === "College graduate" && articleGrade >= 16) return true;
        
        return false;
      });
      setFilteredArticles(filtered); // Set filtered articles based on grade
    }
  };

  return (
    <Router>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <main className="news-articles-container">
          <Routes>
            <Route path="/" element={
              <>
                {filteredArticles.map((newsArticle, i) => (
                  <ArticleCard key={i} newsArticle={newsArticle} />
                ))}
              </>
            } />
            <Route
              path="/article/:title"
              element={<FullArticle newsArticles={newsArticles} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; // Place export here after all code
