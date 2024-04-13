import Container from "../components/container";
import Interviews from "../components/interviews";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import OurActivities from "../components/our-activities";
import { useEffect } from "react";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const hero = allPosts
    .filter((post) => post.category === "hero")
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    })[0];
  const activities = allPosts.filter((post) => post.category === "activity");
  const interviews = allPosts.filter((post) => post.category === "interview");

  useEffect(() => {
    const MIN_DURATION = 10;
    const body = document.querySelector("body");

    function makeCherryBlossom() {
      const cherryBlossom = document.createElement("div");
      const delay = Math.random() * 200;
      const initialOpacity = Math.random();
      const duration = Math.random() * 1 + MIN_DURATION;

      cherryBlossom.classList.add("snowflake-void");
      cherryBlossom.innerText = "🌸";
      cherryBlossom.style.left = Math.random() * window.innerWidth + "px";
      cherryBlossom.style.animationDelay = delay + "s";
      cherryBlossom.style.opacity = initialOpacity + "";
      cherryBlossom.style.animation = `snowFall ${duration}s linear infinite`;

      body?.appendChild(cherryBlossom);

      setTimeout(() => {
        body?.removeChild(cherryBlossom);
      }, (duration + delay) * 100);
    }
    for (let i = 0; i < 30; i++) {
      setTimeout(makeCherryBlossom, i * 1000);
    }
  }, []);
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
          {
            // 이전 hero를 확인 할 수 있는..
          }
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
