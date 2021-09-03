import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <img alt="alt" src={data.urlToImage} className="news__img" />
      <p className="news__desc">{data.description}</p>
      <br />
      <br />
      <a href={data.url} className="news__link">
        Ver artículo completo
      </a>
      <br />
      <p className="news__published">
        Publicado: <span>{data.publishedAt}</span>
      </p>
      <p className="news__author">
        Autor: <span>{data.author}</span>
      </p>
    </div>
  );
}

export default NewsArticle;
