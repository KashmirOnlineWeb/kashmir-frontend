import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import type {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { useState } from 'react';

import AdventureBlogs from '@/components/blog/AdventureBlogs';
import LatestBlogs from '@/components/blog/LatestBlogs';
import UncategorizedBlogs from '@/components/blog/UncategorizedBlogs';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import PageHero from '@/components/page-hero';

import { getPostList } from '../../lib/posts';

export interface ICategory {
  slug: Key | null | undefined;
  name:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}

export interface IPost {
  excerpt: ReactNode;
  exceprt: ReactNode;
  categories: any;
  date: string;
  slug: Key | null | undefined | string;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  featuredImage: {
    node: {
      mediaDetails: {
        sizes: {
          sourceUrl: any;
          width: any;
          height: any;
        }[];
      };
    };
  };
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const allPosts = await getPostList();

  return {
    props: {
      allPosts,
    },
  };
};

const Blog: NextPage = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [posts] = useState(allPosts);

  console.log('posts----->', posts);
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className=" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
        <Header />
        <PageHero
          heroTitle="Travel Stories"
          heroSubtitle="Caption for blog / stories here"
          heroBg='url("/assets/images/pages/hero/page-hero.jpg")'
        />
        <div className="container mx-auto">
          {/* <div className="mt-10 flex flex-row justify-start gap-[20px] text-left text-xs">
            {posts.nodes.map((post: IPost) => (
              <div key={post.slug} className="">
                <FeaturedImage post={post} />
                <div className="relative text-sm uppercase leading-[18px] tracking-[1px]">
                  <div className="flex items-start">
                    {post.categories.nodes.map((category: ICategory) => (
                      <Link
                        className="relative pt-[30px] text-sm font-medium leading-[16px] text-black no-underline"
                        href={`/category/${category.slug}`}
                        key={category.slug}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="">
                  <h2>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative text-xl font-medium leading-[30px] text-[inherit] text-black [text-decoration:none]"
                    >
                      {post.title}
                    </Link>
                    <div className="relative gap-[8px] text-xs font-medium leading-[16px] text-black">
                      <Date dateString={post.date} />
                    </div>
                  </h2>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt as string,
                  }}
                  className="relative flex-1 text-smi leading-[18px] tracking-[-0.02em] text-black"
                />
              </div>
            ))}
          </div>
          <div className="py-4 text-center">
            <LoadMore posts={posts} setPosts={setPosts} />
          </div> */}

          {/* Latest Stories */}
          <LatestBlogs />
          <div className="mt-[40px] sm:border-t sm:border-solid sm:border-smokegrey" />
          <AdventureBlogs />
          <div className="mt-[40px] sm:border-t sm:border-solid sm:border-smokegrey" />
          {/* Other stories */}
          <UncategorizedBlogs />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
