import { getPostsByCategoryNotIn } from '../../../lib/posts';
import React, { useEffect, useState } from 'react';

import type { Post } from '@/types/blog';

import BlogCard from './BlogCard';

function UncategorizedBlogs() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [lastPostIndex, setLastPostIndex] = useState<number>(4);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [allLatestPosts, setAllLatestPosts] = useState<Post[]>([]);

  async function getAdventureBlogs() {
    // categoryId of Adventure = 65, need to show all except Adventure category
    const latestPostsData = await getPostsByCategoryNotIn(65);
    if (latestPostsData.length) {
      setAllLatestPosts(latestPostsData);
      setLatestPosts(latestPostsData.slice(0, 4));
      setTotalPosts(latestPostsData.length);
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
    <div className="flex flex-col items-start justify-start gap-[40px] self-stretch sm:pt-[50px] pt-0 text-9xl text-black px-[24px]">
      <div className="flex flex-col items-start justify-start gap-[40px] self-stretch sm:pb-[100px] pb-10 pt-[50px] text-9xl text-black">
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="flex flex-row justify-between items-center sm:items-start sm:justify-start self-stretch">
            <b className="relative sm:leading-[40px] text-[24px] sm:text-[28px] leading-[28.8px]">Other stories</b>
            <span className='text-[16px] font-bold text-[#0022CC] leading-[22.4px] sm:hidden block'>See All</span>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-4 flex-wrap items-start justify-start gap-[20px] text-left text-xs text-black">
          {latestPosts.map((blog, index) => {
            return <BlogCard blog={blog} key={blog.id} lastIndex={index == latestPosts.length - 1} />;
          })}
        </div>
        <div className="sm:flex w-full items-center justify-center hidden">
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
    </div>
  );
}

export default UncategorizedBlogs;
