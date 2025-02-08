import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const BlogShimmer = () => {
  return (
    <div>
      <section className="text-white body-font bg-blue-800 bg-gradient-to-r">
        <div className="container py-12 mx-auto">
          <h1 className="text-4xl font-large font-extrabold title-font text-center text-white ">
            <Skeleton className="sm:w-90 h-[40px] rounded-full items-center" />
          </h1>
        </div>
      </section>
      <div className="sm:container py-12 mx-auto w-full items-center justify-center"></div>
    </div>
  );
};

export default BlogShimmer;
