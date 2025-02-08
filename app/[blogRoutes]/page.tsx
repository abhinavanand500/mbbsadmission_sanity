"use client";
import React, { useState, useEffect } from "react";
import { getBlogDetails } from "../../lib/getBlogDetails";
import BlogDetailsPage from "./components/BlogDetailsPage";
import BlogShimmer from "./components/BlogShimmer";
import Notfound from "../not-found";

interface PageProps {
  params?: {
    blogRoutes?: string;
  };
}
interface BlogDetails {
  data: any;
  faq: any;
  youtubeEmbedRes: any;
  notFound: boolean;
}

const Page: React.FC<PageProps> = (props) => {
  const [blogDetailsContent, setBlogDetailsContent] =
    useState<BlogDetails | null>(null);

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  async function fetchBlogDetails() {
    try {
      const blogDetails = await getBlogDetails(props?.params?.blogRoutes ?? "");
      setBlogDetailsContent(blogDetails);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setBlogDetailsContent({
        notFound: true,
        data: null,
        faq: null,
        youtubeEmbedRes: null,
      });
    }
  }

  if (blogDetailsContent === null) {
    return <BlogShimmer />;
  }

  if (blogDetailsContent.notFound) {
    return <Notfound />;
  }

  return (
    <>
      {/* Your JSX for rendering blog details */}
      <BlogDetailsPage blogDetailsContent={blogDetailsContent} />
    </>
  );
};

export default Page;
