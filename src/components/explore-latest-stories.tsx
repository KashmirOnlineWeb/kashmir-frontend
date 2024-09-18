import 'swiper/css';
import 'swiper/css/navigation';

import { getPostsByCatgoryId, getLatestPostList } from '../../lib/posts';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Post } from '@/types/blog';

import BlogCard from './blog/BlogCard';
import HomeBlog from './blog/HomeBlog';
import Section from './section';
import Link from 'next/link';

const ExploreLatestStories: NextPage = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [firstPost, setFirstPost] = useState<Post>();
  const [secondPost, setSecondPost] = useState<Post>();
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [allLatestPosts, setAllLatestPosts] = useState<Post[]>([]);

  async function getAdventureBlogs() {
    const latestPostsData = await getLatestPostList();
    const firstItem = latestPostsData[0];
    const secondItem = latestPostsData[1];
    const remainingItems = latestPostsData.slice(2);
    if (firstItem) {
      setFirstPost(firstItem);
    }
    if (secondItem) {
      setSecondPost(secondItem);
    }
    if (remainingItems.length) {
      setAllLatestPosts(remainingItems);
      setLatestPosts(remainingItems.slice(0, 4));
      setTotalPosts(remainingItems.length);
    }
  }

  const nextSlide = () => {
    swiper.slideNext();
  };

  const previousSlide = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    getAdventureBlogs();
  }, []);

  return (
    <div className="blog_arrows box-border w-full flex flex-col items-start justify-start gap-[40px] pb-[30px] md:py-[68px] text-left font-others-capitalised text-sm text-default-white">
      <div className="container mx-auto w-full">
        <div className='px-[24px] sm:px-0 w-full'>
          <Section
            sectionTitle="Blog"
            buttonText="View stories"
            subTitle='Explore our Latest Stories: Tales of Exploration, Discovery and knowledge'
            propZIndex="unset"
            // sectionLink="/blog"
            linkRoute="/blog"
          />
        </div>
        <div className="relative flex items-start justify-start gap-[20px] 2xl:gap-[30px] pt-[24px] sm:flex-row flex-col sm:w-auto w-full">
          {firstPost && <HomeBlog blog={firstPost} />}
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            navigation={false}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false, }}
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="packagesSlider"
          >
            {latestPosts && latestPosts.map((blog) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <SwiperSlide>
                  <div className="sm:px-0 px-[24px] sm:w-auto w-full">
                    <BlogCard blog={blog} rowPros="flex-row" isHomePage={true} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* <div className='sm:block hidden'>
            <button
              onClick={previousSlide}
              className="swiper-button-prev !left-auto !right-[82px] bg-transparent !bottom-[-28px]"
            >
              <img src="/assets/images/icons/arrow-left.svg" alt="" />
            </button>
            <button
              onClick={nextSlide}
              className="swiper-button-next bg-transparent !bottom-[-28px]"
            >
              <img src="/assets/images/icons/arrow-right.svg" alt="" />
            </button>
          </div> */}
        </div>
      </div>
      <Link href="/blog" className='[text-decoration:none] mx-auto'>
        <button className='sm:hidden rounded-full bg-pink px-12 py-2.5 text-center font-others-capitalised text-sm text-default-white mx-auto'>
          View all
        </button>
      </Link>
    </div>
  );
};

export default ExploreLatestStories;
