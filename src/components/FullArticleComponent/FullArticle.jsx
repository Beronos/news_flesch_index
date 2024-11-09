import React from "react";

function FullArticle({ newsArticle, onClick }) {
  if (!newsArticle) {
    return <h1>hahah</h1>;
  }

  return (
    <>
      <button onClick={onClick}>Go back</button>
      <div>
        <h1>{newsArticle.articleTitle}</h1>
        <h2>{newsArticle.topic}</h2>
        <span>{newsArticle.domain}</span>
        <img src={newsArticle.large_image_url} alt={newsArticle.articleTitle} />
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
