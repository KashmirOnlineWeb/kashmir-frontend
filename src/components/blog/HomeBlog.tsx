import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import type { Post } from '@/types/blog';
import TruncateText from '../TruncateText';

interface Props {
  blog: Post;
}

function HomeBlog({ blog }: Props) {
  const formattedCategories = blog?.categories.nodes
    .map((cat) => cat.name)
    .join(' / ');

  function getFromattedDate() {
    if (!blog?.date) return '';
    // Parse the original date string to create a Date object
    const originalDate = parseISO(blog?.date);

    // Format the Date object as "MMM dd, yyyy"
    const formattedDate = format(originalDate, 'MMM dd, yyyy');
    return formattedDate;
  }

  return (
    <div
      className="bg-overlay z-[0] parallax-effect box-border flex sm:h-[480px] sm:w-[639px] flex-row items-end justify-start sm:rounded-3xl rounded-none  bg-cover bg-[top] bg-no-repeat sm:py-10 sm:px-10 py-20 px-5"
      style={{ backgroundImage: `url(${blog.featuredImage.node.link})` }}
    >
      <div className='text-wrap'>
      <div className="flex flex-col items-start sm:justify-end gap-[8px]">
        <b className="relative uppercase leading-[18px] tracking-[1px]">
          {formattedCategories}
        </b>
        <div className="relative sm:text-[37] text-[24px] font-extrabold sm:leading-[49px] leading-[36px]">
          <Link
            href={`/blog/${blog.slug}`}
            className="relative sm:text-21xl text-[24px] font-extrabold sm:leading-[54px] leading-[24px] text-[inherit] [text-decoration:none]"
          >
           <TruncateText text= {blog?.title} limit={50} />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-[8px] text-xs">
          <div className="relative font-medium leading-[16px]">
            {getFromattedDate()}
          </div>
          <div className="relative h-[5px] w-[5px] sm:rounded-[50%] bg-default-white" />
          <div className="relative font-medium leading-[16px]">4 min read</div>
        </div>
        <div className="flex sm:w-[557px] flex-row items-center justify-center text-[inherit]">
          <div className="relative flex-1 leading-[24px]">
            <div
              className=''
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: blog.excerpt,
              }}
            />
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default HomeBlog;
