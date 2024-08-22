import React from "react";

const Article = ({ title, date, preview, minutesToRead }) => {
  let minutesToReadText = "";
  if (minutesToRead < 30) {
    const coffeeCups = Math.ceil(minutesToRead / 5);
    minutesToReadText = `☕️${"☕️".repeat(coffeeCups - 1)} ${minutesToRead} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutesToRead / 10);
    minutesToReadText = `🍱${"🍱".repeat(bentoBoxes - 1)} ${minutesToRead} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{minutesToReadText}</small>
    </article>
  );
};

export default Article;