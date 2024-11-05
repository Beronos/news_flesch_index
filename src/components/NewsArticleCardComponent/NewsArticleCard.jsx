import "./NewsArticleCard.css";
import { Link } from "react-router-dom";

function NewsArticleCard({ newsArticle }) {
  return (
    <>
      <div className="card">
        <Link to="/article" state={{ article: newsArticle }}> 
        <h1>{newsArticle.title}</h1>
        </Link>
        <span>{newsArticle.domain}</span>
        <img src={newsArticle.large_image_url} alt="" />
      </div>
    </>
  );
}

export default NewsArticleCard;
