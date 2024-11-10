import "./ArticleCard.css";

function ArticleCard({ newsArticle, onClick }) {
  const formattedDate = new Date(newsArticle.published_date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <article className="card" onClick={onClick}>
        <img src={newsArticle.large_image_url} alt="" />
        <p>{newsArticle.domain}</p>
        <h1>{newsArticle.title}</h1>
        <h2>{formattedDate}</h2>
        <p>
          {newsArticle.content.length > 100
            ? `${newsArticle.content.substring(0, 100)}...`
            : newsArticle.content}
        </p>
        <p>{newsArticle.articleReadability}</p>
        <p>{newsArticle.fleschIndex}</p>
        <p>{newsArticle.topic}</p>
      </article>
    </>
  );
}

export default ArticleCard;
