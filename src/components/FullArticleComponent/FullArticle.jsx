import "./FullArticle.css";

function FullArticle({ newsArticle, onClick }) {
  return (
    <>
      <button class="go-back-btn" onClick={onClick}>
        Go back
      </button>
      <div className="full-article">
        <img src={newsArticle.large_image_url} alt={newsArticle.articleTitle} />
        <h1>{newsArticle.title}</h1>
        <h2>{newsArticle.topic}</h2>
        <span>{newsArticle.domain}</span>
        <p>{newsArticle.content}</p>
        <div>
          <ul>
            <li>
              <strong>Word Count:</strong> {newsArticle.wordCount}
            </li>
            <li>
              <strong>Sentence Count:</strong> {newsArticle.sentenceCount}
            </li>
            <li>
              <strong>Syllable Count:</strong> {newsArticle.syllableCount}
            </li>
            <li>
              <strong>Flesch Index:</strong> {newsArticle.fleschIndex}
            </li>
            <li>
              <strong>Grade Level:</strong> {newsArticle.gradeLevel}
            </li>
            <li>
              <strong>Article Readability:</strong>{" "}
              {newsArticle.articleReadability}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FullArticle;
