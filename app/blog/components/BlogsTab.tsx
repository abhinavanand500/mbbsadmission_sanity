"use client";
import Cards from "./Cards";
import React, { useState, useEffect } from "react";

const BlogsTab = ({ blogContent, tabDetail }: any) => {
  const [blogDetailsForCurrentTab, setBlogDetailsForCurrentTab] =
    useState(blogContent);

  useEffect(() => {
    if (tabDetail !== "All") {
      const result = blogContent.filter((val: any) => {
        return val.blogCategory === tabDetail;
      });
      setBlogDetailsForCurrentTab(result);
    } else {
      setBlogDetailsForCurrentTab(blogContent);
    }
  }, [tabDetail, blogContent]);

  return (
    <div className="flex-1 w-full grid-cols-3">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogDetailsForCurrentTab.map((blog: any, index: number) => (
              <Cards blog={blog} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsTab;
