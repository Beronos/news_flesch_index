export const readabilityLevels = [
    { minScore: 90, level: "5th grade" },
    { minScore: 80, level: "6th grade" },
    { minScore: 70, level: "7th grade" },
    { minScore: 60, level: "8th & 9th grade" },
    { minScore: 50, level: "10th to 12th grade" },
    { minScore: 30, level: "College" },
    { minScore: -Infinity, level: "College graduate" },
];

export const countSentences = (text) => {
    const sentenceEndings = /(?<!\d)[.!?]+(?!\d)/g;
    let count = (text.match(sentenceEndings) || []).length;
    if (count === 0 && text.length > 0) {
      count = 1;
    }

    return count;
  };

export const countWords = (text) => {
    const words = text.split(/\s+/);
    return words.filter((word) => word.length > 0).length;
};

export const countSyllables = (text) => {
    const words = text.toLowerCase().split(/\s+/);
    let syllableCount = 0;
  
    words.forEach(word => {
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        const syllableMatches = word.match(/[aeiouy]{1,2}/g);
        syllableCount += syllableMatches ? syllableMatches.length : 1;
    });
  
    return syllableCount;
  };

export const computeFleschIndex = (syllableCount, wordCount, sentenceCount) => {
    if (wordCount === 0 || sentenceCount === 0) {
        return 0;
    }

    return (
        206.835 -
        1.015 * (wordCount / sentenceCount) -
        84.6 * (syllableCount / wordCount)
    );
};

export const computeGradeLevel = (syllableCount, wordCount, sentenceCount) => {
    return (
        0.39 * (wordCount / sentenceCount) +
        11.8 * (syllableCount / wordCount) -
        15.59
    );
};

export const classifyArticleReadability = (fleschIndex) => {
    return readabilityLevels.find(({ minScore }) => fleschIndex >= minScore)
        .level;
};

export function addFleshIndexes(newsArticles) {
    return newsArticles.map((newsArticle) => {
        const sentenceCount = countSentences(newsArticle.content);
        const wordCount = countWords(newsArticle.content);
        const syllableCount = countSyllables(newsArticle.content);
        const fleschIndex = computeFleschIndex(
        syllableCount,
        wordCount,
        sentenceCount
        );
        const gradeLevel = computeGradeLevel(
        syllableCount,
        wordCount,
        sentenceCount
        );
        const articleReadability = classifyArticleReadability(fleschIndex);

        const sanitizedTitle = newsArticle.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

        return {
            ...newsArticle,
            id: sanitizedTitle,
            fleschIndex,
            gradeLevel,
            articleReadability,
            wordCount,
            sentenceCount,
            syllableCount,
        };
    });
}
