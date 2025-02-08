import Image from "next/image";
import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

const Cards = ({ blog, index }: any) => {
  return (
    <div className="p-4 md:w-1/3">
      <Link href={blog.slug.current}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={urlFor(blog.bannerImage).url()}
            alt="slider-image"
            height={1000}
            width={2000}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {blog.blogCategory}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {blog.title}
            </h1>
            <p className="leading-relaxed mb-3">{blog.metaDescription}</p>
            <div className="flex items-center flex-wrap ">
              <div className="text-blue-700 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
