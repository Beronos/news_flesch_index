import { useEffect, useState, useContext } from "react";
import { addFleshIndexes } from "../../utils/fleschUtils.js";
import ArticleCard from "../ArticleCardComponent/ArticleCard.jsx";
import FullArticle from "../FullArticleComponent/FullArticle.jsx";
import Navigation from "../NavigationComponent/Navigation.jsx";
import SearchBar from "../SearchBarComponent/SearchBar";
import Preferences from "../PreferencesComponent/Preferences.jsx";
import UserContext from "../UserComponent/User.jsx";
import "./App.css";

function App() {
  const { selectedTopics } = useContext(UserContext);
  const [newsArticles, setNewsArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);
  const [isPreferencesOpened, setIsPreferencesOpened] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("All Grades");

  useEffect(() => {
    fetch("/data/news_articles.json")
      .then((result) => result.json())
      .then((data) => {
        const newsArticlesData = addFleshIndexes(data);
        setNewsArticles(newsArticlesData);
        setFilteredArticles(newsArticlesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (selectedNewsArticle) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedNewsArticle]);

  useEffect(() => {
    let filtered = [...newsArticles];

    if (selectedTopics.length > 0) {
      filtered = filtered.filter((article) =>
        selectedTopics.some(
          (topic) => topic.toLowerCase() === article.topic.toLowerCase()
        )
      );
    }

    if (selectedGrade !== "All Grades") {
      filtered = filtered.filter(
        (article) => article.articleReadability === selectedGrade
      );
    }

    setFilteredArticles(filtered);
  }, [selectedTopics, selectedGrade, newsArticles]);

  const handleSearch = (grade) => {
    setSelectedGrade(grade);
  };

  return (
    <div className="news-articles-app">
      <Navigation
        togglePreferences={() => setIsPreferencesOpened(!isPreferencesOpened)}
      />
      <h1>Article Search</h1>
      {isPreferencesOpened && (
        <Preferences closePreferences={() => setIsPreferencesOpened(false)} />
      )}
      {selectedNewsArticle ? (
        <FullArticle
          newsArticle={selectedNewsArticle}
          onClick={() => setSelectedNewsArticle(null)}
        />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <main className="news-articles-container">
            {filteredArticles.map((newsArticle, i) => (
              <ArticleCard
                key={i}
                newsArticle={newsArticle}
                onClick={() => setSelectedNewsArticle(newsArticle)}
              />
            ))}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
