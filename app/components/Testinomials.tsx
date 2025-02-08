"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { urlFor } from "@/lib/client";

const Testinomials = ({ testinomials }: any) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-700"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h2 className="sm:w-2/5 text-4xl font-bold tracking-tight text-blue-800 sm:text-4xl mt-4 mb-8">
                Discover What Our Students Say
              </h2>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Explore our testimonials section to hear directly from students
                and alumni about their experiences studying MBBS abroad with us.
                Gain insight into the supportive learning environment, diverse
                opportunities, and impactful education that have shaped their
                journey towards becoming successful medical professionals.
              </p>
            </div>
          </div>
        </div>

        <Carousel
          className="container md:px-40 mx-auto"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {testinomials?.review.map((review: any, index: any) => {
              return (
                <CarouselItem
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <div className="p-1">
                    <div className="p-4 sm:mb-0 mb-6">
                      <div className="rounded-lg h-40 w-40 overflow-hidden flex items-center justify-center mx-auto">
                        <Image
                          alt={review.metaTitle || "metadata"}
                          height={200}
                          width={200}
                          className="object-contain h-full w-full rounded"
                          src={urlFor(review.studentImage).url()}
                        />
                      </div>
                      <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                        {review.metaTitle}
                      </h2>
                      <a className="text-blue-700 inline-flex items-center mt-3">
                        {review.collegeName} ({review.country})
                      </a>
                      <p className="leading-relaxed mt-2 text-sm text-center">
                        {review.studentTestimonial}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-14 top-1/4 sm:top-1/3" />
          <CarouselNext className="absolute right-14 top-1/4 sm:top-1/3" />
        </Carousel>
      </section>
    </div>
  );
};

export default Testinomials;
