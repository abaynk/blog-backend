import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styles from "../../styles/Category.module.scss";

const Category = ({ category, categories, articles }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className={styles.category}>
        <div>
          <h1 className={styles.title}>
            {category.name[0]}
            <span>{category.name.slice(1)}</span>
          </h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");
  const articles = await fetchAPI(`/articles?[category.name]=${params.slug}`);

  return {
    props: { category, categories, articles },
    revalidate: 1,
  };
}

export default Category;
