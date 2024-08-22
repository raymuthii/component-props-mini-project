import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
  let minutesToReadText = "";
  if (minutesToRead < 30) {
    const coffeeCups = Math.ceil(minutesToRead / 5);
    minutesToReadText = `☕️${"☕️".repeat(coffeeCups - 1)} ${minutesToRead} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutesToRead / 10);
    minutesToReadText = `🍱${"🍱".repeat(bentoBoxes - 1)} ${minutesToRead} min read`;
  }

  return (
    <article className="article">
      <h3 className="article-title">{title}</h3>
      <small className="article-date">{date}</small>
      <p className="article-preview">{preview}</p>
      <small className="article-minutes">{minutesToReadText}</small>
    </article>
  );
};

export default Article;