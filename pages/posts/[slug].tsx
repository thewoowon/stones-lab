import { useRouter } from "next/router";
import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import type PostType from "../../interfaces/post";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { LeftSpeechBubble, RightSpeechBubble } from "@/components/SpeechBubble";
import ImageContainer from "@/components/ImageContainer";
import ProfileCard from "@/components/ProfileCard";
import Slider from "@/components/Slider";
import styled from "@emotion/styled";
import { useState } from "react";
import PaddingBox from "@/components/PaddingBox";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const components = {
  Head,
  Image,
  LeftSpeechBubble,
  RightSpeechBubble,
  ImageContainer,
  Slider,
  ProfileCard,
  PaddingBox,
};

export default function Post({ source, frontMatter }: Props) {
  const router = useRouter();
  const title = `${frontMatter.title} | Next.js Blog Example with ${CMS_NAME}`;
  const [modal, setModal] = useState(false);

  return (
    <Layout preview={true}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <article className="mb-32 max-w-3xl">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={frontMatter.ogImage.url} />
              </Head>
              <PostHeader
                title={frontMatter.title}
                coverImage={frontMatter.coverImage}
                date={frontMatter.date}
                author={frontMatter.author}
              />
              <MDXRemote {...source} components={components} />
            </article>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const POSTS_PATH = path.join(process.cwd(), "_posts");
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
