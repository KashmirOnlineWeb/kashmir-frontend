import { getLatestPostList } from '../../../lib/posts';
import React, { useEffect, useState } from 'react';

import type { Post } from '@/types/blog';

import BlogCard from './BlogCard';
import LatestFirstBlogPost from './LatestFirstBlogPost';

function LatestBlogs() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [allLatestPosts, setAllLatestPosts] = useState<Post[]>([]);
  const [firstPost, setFirstPost] = useState<Post>();
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [lastPostIndex, setLastPostIndex] = useState<number>(4);

  async function getLatestBlogs() {
    const latestPostsData = await getLatestPostList();
    const firstItem = latestPostsData[0];
    const remainingItems = latestPostsData.slice(1);
    if (firstItem) {
      setFirstPost(firstItem);
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
    getLatestBlogs();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-start gap-[52px] text-sm text-black px-[24px]">
      <div className="flex flex-col items-start justify-start gap-[48px] pt-[50px] text-9xl">
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="flex flex-col items-start justify-start gap-[40px] self-stretch">
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="flex flex-row items-center sm:items-start justify-between self-stretch">
                <b className="relative sm:leading-[40px] text-[24px] sm:text-[28px] leading-[28.8px]">Latest Stories</b>
                <span className='text-[16px] font-bold text-[#DD1045] leading-[22.4px] sm:hidden block'>See All</span>
              </div>
            </div>
            <div className='sm:block hidden'>
              {firstPost && <LatestFirstBlogPost blog={firstPost} />}
            </div>
            <div className=" w-full grid grid-cols-1 sm:grid-cols-4 flex-wrap items-start justify-start gap-[20px] text-left text-xs text-black">
              {latestPosts && latestPosts?.map((blog) => {
                return <BlogCard blog={blog} key={blog.id} />;
              })}
            </div>
            <div className="w-full items-center justify-center hidden sm:flex">
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
      </div>
    </div>
  );
}

export default LatestBlogs;
