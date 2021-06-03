import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import styles from "../../styles/Article.module.scss";
const MyImage = (props) => {
  return (
    <img
      className={fullSize ? "large" : "small"}
      alt={props.alt}
      src={props.src}
    />
  );
};
const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };
  const renderers = {
    image: MyImage,
  };
  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className={styles.article}>
        <div>
          <img src={imageUrl} alt="photo" className={styles.banner} />
          <h1 className={styles.title}>{article.title}</h1>
          <ReactMarkdown
            children={article.content}
            skipHtml={true}
            className={styles.articleContent}
            renderers={renderers}
          />

          <div className={styles.credits}>
            <hr />

            <div>
              <p>By {article.author.name}</p>
              <p>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
