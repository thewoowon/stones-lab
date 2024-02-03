import Container from "../components/container";
import Interviews from "../components/interviews";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import OurActivities from "../components/our-activities";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const hero = allPosts.filter((post) => post.category === "hero")[0];
  const activities = allPosts.filter((post) => post.category === "activity");
  const interviews = allPosts.filter((post) => post.category === "interview");
  return (
    <>
      <Layout>
        <Head>
          <title>{`스톤즈랩`}</title>
        </Head>
        <Container>
          <Intro />
          {hero && (
            <HeroPost
              title={hero.title}
              coverImage={hero.coverImage}
              date={hero.date}
              author={hero.author}
              slug={hero.slug}
              excerpt={hero.excerpt}
            />
          )}
          {activities.length > 0 && <OurActivities posts={activities} />}
          {interviews.length > 0 && <Interviews posts={interviews} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "category",
  ]);

  return {
    props: { allPosts },
  };
};
