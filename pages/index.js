import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Image from "../components/image";
import styles from "../styles/Home.module.scss";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className={styles.home}>
        <div>
          <div className={styles.meta}>
            <h1 className={styles.title}>
              Б<span>ЛО</span>G
            </h1>
            <div>
              <h3 className={styles.description}>
                {homepage.hero.description}
              </h3>
              <Image
                image={homepage.hero.photo}
                style={{
                  position: "static",
                  borderRadius: "50%",
                  height: 70,
                  width: 70,
                }}
              />
            </div>
          </div>

          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
