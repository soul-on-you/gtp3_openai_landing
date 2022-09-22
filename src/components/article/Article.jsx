import React from "react";
import "./article.css";

const Article = ({
  image,
  url,
  date,
  description,
  className,
  style,
  ...props
}) => {
  return (
    <div className={`article ${className}`} {...props}>
      <div className="article__image">
        <img src={image} alt="article" />
      </div>

      <div className="article__content">
        <div className="article__content__date">
          <p>{date}</p>
        </div>

        <div className="article__content__description">
          <p>{description}</p>
        </div>

        <div className="article__content__link">
          <p><a href={url}>Read Full Article</a></p>
        </div>
      </div>
    </div>
  );
};

export default Article;
