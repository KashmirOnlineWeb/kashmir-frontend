import { getPostsByCatgoryId } from '../../../lib/posts';
import React, { useEffect, useState } from 'react';

import type { Post } from '@/types/blog';

import AdventureStoryBlogCard from './AdventureStoryBlogCard';
import BlogCard from './BlogCard';

function AdventureBlogs() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [firstPost, setFirstPost] = useState<Post>();
  const [secondPost, setSecondPost] = useState<Post>();
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [lastPostIndex, setLastPostIndex] = useState<number>(4);
  const [allLatestPosts, setAllLatestPosts] = useState<Post[]>([]);

  async function getAdventureBlogs() {
    // categoryId of Adventure = 65
    const latestPostsData = await getPostsByCatgoryId(65);
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

  function loadMore() {
    if (lastPostIndex > totalPosts) {
      return null;
    }
    setLatestPosts(allLatestPosts.slice(0, lastPostIndex + 4));
    return setLastPostIndex((prev) => prev + 4);
  }

  useEffect(() => {
    getAdventureBlogs();
  }, []);

  return (
    <div className="flex flex-col items-start justify-start gap-[40px] self-stretch pt-[50px] text-9xl text-black px-[24px]">
      <div className="flex flex-col items-start justify-start self-stretch">
        <div className="flex flex-row justify-between items-center sm:items-start sm:justify-start self-stretch">
          <b className="relative sm:leading-[40px] text-[24px] sm:text-[28px] leading-[28.8px]">Adventure Stories</b>
          <span className='text-[16px] font-bold text-[#DD1045] leading-[22.4px] sm:hidden block'>See All</span>
        </div>
      </div>
      <div className="flex w-full sm:flex-row flex-col items-start justify-start gap-[20px]">
        {firstPost && <AdventureStoryBlogCard blog={firstPost} />}
        <div className='border-b border-solid border-smokegrey w-full sm:hidden block'></div>
        {secondPost && <AdventureStoryBlogCard blog={secondPost} />}
        <div className='border-b border-solid border-smokegrey w-full sm:hidden block'></div>
      </div>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-4 flex-wrap items-start justify-start gap-[20px] text-left text-xs text-black">
        {latestPosts.map((blog) => {
          return <BlogCard blog={blog} key={blog.id} />;
        })}
      </div>
      <div className="w-full items-center justify-center sm:flex hidden">
        <button
          type="button"
          className="relative flex flex-row items-center justify-start rounded-full bg-mediumblue-100 px-5 py-2.5 text-center font-others-capitalised text-sm text-default-white"
          onClick={loadMore}
          disabled={lastPostIndex > totalPosts}
        >
          {lastPostIndex > totalPosts
            ? 'No more posts to load'
            : 'Load more posts'}
        </button>
      </div>
    </div>
  );
}

export default AdventureBlogs;
