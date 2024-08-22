import React from "react";

const About = ({ image, about }) => {
  return (
    <aside className="about">
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" className="about-image" />
      <p className="about-text">{about}</p>
    </aside>
  );
};

export default About;