import React from "react";
import Card from "./card";
import styles from "../styles/Card.module.scss";
const Articles = ({ articles }) => {
  return (
    <div className={styles.articles}>
      {articles.map((article, i) => {
        return <Card article={article} key={`article__${article.slug}`} />;
      })}
    </div>
  );
};

export default Articles;
