import { useContext } from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import "./App.css";
import NewsArticleCard from "../NewsArticleCardComponent/NewsArticleCard";
import SearchBar from "../SearchBarComponent/SearchBar";
import FullArticle from "../FullArticleComponent/FullArticle"; // Import the new component
// import Preferences from "/Users/mahitauppuluri/Desktop/news_flesch_index/src/context/PreferencesContext"; // Import Preferences
import User from "../UserComponent/User"; // Import User
import { NewsContext } from '/Users/mahitauppuluri/Desktop/news_flesch_index/src/context/NewsContext';
import { PreferencesProvider } from '../../context/PreferencesContext';

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
  const { newsArticles } = useContext(NewsContext);;

  // useEffect(() => {
  //   fetch("data/news_articles.json")
  //     .then((result) => result.json())
  //     .then((data) => {
  //       const newsArticlesData = addIndexes(data);
  //       setNewsArticles(newsArticlesData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleSearch = (searchTerm) => {
    // TODO: filtering
    console.log("Search term: ", searchTerm);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <nav>
        <Link to="/preferences">Preferences</Link>
        <Link to="/user">User Preferences</Link>
      </nav>
      <main className="news-articles-container">
      <Routes>
        <Route path="/" element={
            newsArticles.map((newsArticle, i) => (
              <NewsArticleCard key={i} newsArticle={newsArticle} />
            ))
          }/>
         <Route path="/article" element={<FullArticle />} />
         <Route path="/preferences" element={<PreferencesProvider />} /> {/* Add route for preferences */}
         <Route path="/user" element={<User />} /> {/* Add route for user preferences summary */}
        </Routes>
      </main>
    </>
  );
}

export default App;
