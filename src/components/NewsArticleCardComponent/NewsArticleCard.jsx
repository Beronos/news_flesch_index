import "./NewsArticleCard.css";

function NewsArticleCard({ newsArticle }) {
  return (
    <>
      <div className="card">
        <h1>{newsArticle.title}</h1>
        <span>{newsArticle.domain}</span>
        <img src={newsArticle.large_image_url} alt="" />
      </div>
    </>
  );
}

export default NewsArticleCard;
