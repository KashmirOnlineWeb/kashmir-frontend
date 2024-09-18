/* eslint-disable @next/next/no-img-element */
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import type { Post } from '@/types/blog';

interface Props {
  blog: Post;
}

function LatestFirstBlogPost({ blog }: Props) {
  const formattedCategories = blog?.categories.nodes
    .map((cat) => cat.name)
    .join(' / ');

  const formattedAuthorName = blog?.author.node.firstName
    ? `${blog?.author.node.firstName} ${blog?.author.node.lastName}`
    : '';

  function getFromattedDate() {
    if (!blog?.date) return '';
    // Parse the original date string to create a Date object
    const originalDate = parseISO(blog?.date);

    // Format the Date object as "MMM dd, yyyy"
    const formattedDate = format(originalDate, 'MMM dd, yyyy');
    return formattedDate;
  }

  return (
    <div className="flex w-full flex-row items-start justify-start gap-[24px] text-sm">
      <img
        className="h-[426px] w-[749px] rounded-3xl object-cover"
        alt={blog.featuredImage.node.altText}
        src={blog.featuredImage.node.link}
      />
      <div className="flex flex-1 flex-col items-start justify-end gap-[8px]">
        <div className="flex flex-col items-start justify-end">
          <b className="relative uppercase leading-[18px] tracking-[1px]">
            {formattedCategories}
          </b>
          <Link
            href={`/blog/${blog.slug}`}
            className="relative text-21xl font-extrabold leading-[54px] text-[inherit] [text-decoration:none]"
          >
            <div dangerouslySetInnerHTML={{ __html: blog?.title }} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-end gap-[4px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-semibold leading-[16px]">
              By {formattedAuthorName}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px] text-xs">
            <div className="relative font-medium leading-[16px]">
              {getFromattedDate()}
            </div>
            {/* <div className="relative h-[5px] w-[5px] rounded-[50%] bg-black" />
            <div className="relative font-medium leading-[16px]">
              4 min read
            </div> */}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center self-stretch text-base">
          <div className="relative flex-1 leading-[26px]">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: blog.excerpt,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestFirstBlogPost;
