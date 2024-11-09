export const countSentences = (text) => {
    const sentenceEndings = /[.!?;:]/g;
    return (text.match(sentenceEndings) || []).length;
  };
  
  export const countWords = (text) => {
    const words = text.split(/\s+/);
    return words.filter(word => word.length > 0).length;
  };
  
  export const countSyllables = (word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const syllableMatches = word.match(/[aeiouy]{1,2}/g);
    return syllableMatches ? syllableMatches.length : 0;
  };
  
  export const computeFleschIndex = (syllableCount, wordCount, sentenceCount) => {
    return 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllableCount / wordCount);
  };
  
  export const computeGradeLevel = (syllableCount, wordCount, sentenceCount) => {
    return 0.39 * (wordCount / sentenceCount) + 11.8 * (syllableCount / wordCount) - 15.59;
  };
  
  export const classifyArticleReadability = (fleschIndex) => {
    if (fleschIndex >= 90) return '5th grade';
    if (fleschIndex >= 80) return '6th grade';
    if (fleschIndex >= 70) return '7th grade';
    if (fleschIndex >= 60) return '8th & 9th ';
    if (fleschIndex >= 50) return '10th to 12th ';
    if (fleschIndex >= 30) return 'College';
    return 'College graduate';
  };