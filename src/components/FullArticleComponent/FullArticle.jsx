// FullArticle.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const FullArticle = () => {
  const location = useLocation();
  const { article } = location.state || {}; // Safely access article

  if (!article) {
    return <div>No article found.</div>; // Provide fallback UI
  }

  const { title, content, domain, large_image_url } = article;

  return (
    <div>
      <h1>{title}</h1>
      <span>{domain}</span>
      <img src={large_image_url} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default FullArticle; // Ensure this line is present
