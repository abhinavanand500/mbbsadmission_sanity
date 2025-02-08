"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "./TabComponent";
import { getBlogData } from "@/lib/getBlogs";
import ShimmerUIBlog from "./ShimmerUIBlog";
import BlogsTab from "./BlogsTab";

const BlogSection = () => {
  const [blogContent, setBlogContent] = useState([]);

  useEffect(() => {
    fetchMyAPI();
  }, []);

  async function fetchMyAPI() {
    const homePageData = await getBlogData();
    setBlogContent(homePageData.result);
  }

  if (blogContent.length === 0) {
    return <ShimmerUIBlog />;
  }

  return (
    <div>
      <Tabs>
        <Tab label="All">
          <div className="py-4">
            <BlogsTab blogContent={blogContent} tabDetail="All" />
          </div>
        </Tab>
        <Tab label="MBBS Abroad">
          <div className="py-4">
            <BlogsTab blogContent={blogContent} tabDetail="MBBS Abroad" />
          </div>
        </Tab>
        <Tab label="Philippines">
          <div className="py-4">
            <BlogsTab blogContent={blogContent} tabDetail="Philippines" />
          </div>
        </Tab>
        <Tab label="India">
          <div className="py-4">
            <BlogsTab blogContent={blogContent} tabDetail="India" />
          </div>
        </Tab>
        <Tab label="Medical PG">
          <div className="py-4">
            <BlogsTab blogContent={blogContent} tabDetail="Medical PG" />
          </div>
        </Tab>
        <Tab label="Nursing Jobs">
          <div className="py-4">
            <BlogsTab blogContent={blogContent} tabDetail="Nursing Jobs" />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BlogSection;
