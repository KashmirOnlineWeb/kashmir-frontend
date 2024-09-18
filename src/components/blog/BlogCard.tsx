/* eslint-disable @next/next/no-img-element */
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion"

import type { Post } from '@/types/blog';

interface Props {
  blog: Post;
  rowPros?: string;
  lastIndex?: boolean;
  isHomePage?: boolean;
}

function BlogCard({ blog, rowPros, lastIndex, isHomePage }: Props) {
  const formattedCategories = blog?.categories.nodes
    .map((cat) => cat.name)
    .slice(0,2)
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
    <>
    <div
      className={`flex ${rowPros} ${isHomePage && "max-w-[100%]"} sm:max-w-[300px] flex-1 flex-col items-start justify-start gap-[24px] text-black`}
    >
      <motion.img
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`relative h-[199px] w-full shrink-0 overflow-hidden rounded-2xl object-cover"`}
        alt={blog.featuredImage.node.altText}
        src={blog.featuredImage.node.link}
      />
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <div className="flex flex-col items-start justify-start">
          <div className="relative font-medium leading-[16px]">
            {formattedCategories}
          </div>
          <Link
            className="relative text-xl mt-2 font-bold leading-[25px] text-[inherit] [text-decoration:none]"
            href={`/blog/${blog.slug}`}
          >
            <div dangerouslySetInnerHTML={{ __html: blog?.title }} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-end gap-[4px] text-sm">
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
        <div className=" flex flex-row items-center justify-start self-stretch text-smi">
          <div className="relative flex-1 leading-[18px] tracking-[-0.02em]">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: blog.excerpt.substring(0, 150),
              }}
            />
          </div>
        </div>
      </div>
    </div>
    {!lastIndex && <div className='border-b border-solid border-smokegrey sm:hidden block'></div>}
    </>
  );
}

export default BlogCard;
