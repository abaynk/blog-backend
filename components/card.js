import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import styles from "../styles/Card.module.scss";
import { getStrapiMedia } from "../lib/media";

const Card = ({ article }) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          backgroundImage: `url(${getStrapiMedia(article.image)})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.cardContentContainer}>
        <div className={styles.cardContent}>
          <p className={styles.date}>
            <span>📅</span>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>

          <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a>
              <p id="title" className={styles.title}>
                {article.title}
              </p>
            </a>
          </Link>
          <p className={styles.description}>{article.description}</p>
          <p id="category" className={styles.category}>
            <Link
              as={`/category/${article.category.name}`}
              href="/category/[id]"
            >
              <a className={styles.category}>{article.category.name}</a>
            </Link>{" "}
            by {article.author.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
