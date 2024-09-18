/* eslint-disable react/jsx-key */
import 'swiper/css';
import 'swiper/css/navigation';

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import type {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Date from '@/components/Date';
import FeaturedImage from '@/components/FeaturedImage';
import type { IPost } from '@/pages/blog';

import { getPostList } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async (_context) => {
  const allPosts = await getPostList();
  // eslint-disable-next-line no-console
  console.log(allPosts);
  return {
    props: {
      allPosts,
    },
  };
};

const BlogCarousel: NextPage = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [setSwiper] = useState<any>(null);
  const [posts] = useState(allPosts);
  return (
    <div className="curated_packages pt-[24px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        navigation={false}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="mySwiper1"
      >
        <ul>
          {posts.nodes.map(
            (post: {
              date: string;
              slug: Key | null | undefined;
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
              excerpt: string;
              exceprt: string;
              categories: string[];
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
            }) => {
              return (
                <SwiperSlide>
                  <li key={post.slug} className="mb-4 grid grid-cols-5 gap-4">
                    <FeaturedImage post={post} />
                    <h2>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-2xl text-blue-400 hover:text-blue-600"
                      >
                        {post.title}
                      </Link>
                      <Date dateString={post.date} />
                    </h2>
                  </li>
                </SwiperSlide>
              );
            },
          )}
        </ul>
        {posts.nodes.map((post: IPost) => (
          <li key={post.slug} className="mb-4 grid grid-cols-5 gap-4">
            <SwiperSlide>
              <FeaturedImage post={post} />
              <h2>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-2xl text-blue-400 hover:text-blue-600"
                >
                  {post.title}
                </Link>
                <Date dateString={post.date} />
              </h2>
            </SwiperSlide>
          </li>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;
