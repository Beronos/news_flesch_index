import "./FullArticle.css";

function FullArticle({ newsArticle, onClick }) {
  
  const date = new Date(newsArticle.published_date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <button className="go-back-btn" onClick={onClick}>
        Go back
      </button>
      <div className="full-article">
        <img src={newsArticle.large_image_url} alt={newsArticle.articleTitle} />
        <span className="article-domain">{newsArticle.domain}</span>
        <h1 className="full-article-title">{newsArticle.title}</h1>
        <h4>{formattedDate}</h4>
        <h3>{newsArticle.topic}</h3>
        <p>{newsArticle.content}</p>
        <div className="readability-table">
          <ul>
            <li>
              <strong>Word Count </strong> {newsArticle.wordCount}
            </li>
            <li>
              <strong>Sentence Count </strong> {newsArticle.sentenceCount}
            </li>
            <li>
              <strong>Syllable Count </strong> {newsArticle.syllableCount}
            </li>
            <li>
              <strong>Flesch Index </strong> {newsArticle.fleschIndex}
            </li>
            <li>
              <strong>Grade Level </strong> {" "}
              {newsArticle.articleReadability}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FullArticle;
