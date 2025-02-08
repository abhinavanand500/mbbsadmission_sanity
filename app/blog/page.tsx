import React from "react";
import BlogSection from "./components/BlogSection";

const page = () => {
  return (
    <>
      <section className="text-white body-font bg-blue-800 bg-gradient-to-r">
        <div className="container py-12 mx-auto">
          <h1 className="text-4xl font-large font-extrabold title-font text-center text-white">
            BLOG
          </h1>
          <p className=" w-3/4 mt-4 mx-auto leading-relaxed text-base text-center">
            Explore our insightful blog page designed to illuminate the diverse
            opportunities for pursuing MBBS across the globe. Let our motivating
            content inspire your journey into the world of international medical
            education.
          </p>
        </div>
      </section>
      <div className="sm:container py-12 mx-auto w-full items-center justify-center">
        <BlogSection />
      </div>
    </>
  );
};

export default page;
