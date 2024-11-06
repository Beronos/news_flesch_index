import "./ArticleCard.css";
import { Link } from 'react-router-dom';

function ArticleCard({ newsArticle }) {
  console.log(newsArticle);

  const formattedDate = new Date(newsArticle.published_date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <div className="card">
        <img src={newsArticle.large_image_url} alt="" />
        <p>{newsArticle.domain}</p>
        <Link to={`/article/${encodeURIComponent(newsArticle.title)}`} state={{ article: newsArticle }}>
        <h1>{newsArticle.title}</h1>
      </Link>
        <h2>{formattedDate}</h2>
        <p>
          {newsArticle.content.length > 100
            ? `${newsArticle.content.substring(0, 100)}...`
            : newsArticle.content}
        </p>
      </div>
    </>
  );
}

export default ArticleCard;