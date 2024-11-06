import React from 'react';
import { useParams } from 'react-router-dom';

const normalizeTitle = (title) => {
  return title
    .toLowerCase() 
    .replace(/[^a-z0-9]/g, '');
};

const FullArticle = ({ newsArticles }) => {
  const { title } = useParams(); 

  const decodedTitle = decodeURIComponent(title); 

  // Normalize the URL title
  const normalizedUrlTitle = normalizeTitle(decodedTitle);

  const article = newsArticles.find((article) => {
    // Normalize the article title and compare
    return normalizeTitle(article.title) === normalizedUrlTitle;
  });

  if (!article) {
    return <div>No article found.</div>;
  }

  const { title: articleTitle, 
    content, 
    domain, 
    large_image_url, 
    wordCount,
    sentenceCount,
    syllableCount,
    fleschIndex,
    gradeLevel,
    topic,
    articleReadability } = article;
    

  return (
    <div>
      <h1>{articleTitle}</h1>
      <h2>{topic}</h2>
      <span>{domain}</span>
      <img src={large_image_url} alt={articleTitle} />
      <p>{content}</p>
      <div>
        <ul>
          <li><strong>Word Count:</strong> {wordCount}</li>
          <li><strong>Sentence Count:</strong> {sentenceCount}</li>
          <li><strong>Syllable Count:</strong> {syllableCount}</li>
          <li><strong>Flesch Index:</strong> {fleschIndex}</li>
          <li><strong>Grade Level:</strong> {gradeLevel}</li>
          <li><strong>Article Readability:</strong> {articleReadability}</li>
        </ul>
      </div>
    </div>
  );
};

export default FullArticle;
