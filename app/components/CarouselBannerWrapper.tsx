"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

const CarouselBannerWrapper = ({ carouselData }: any) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="mt-5">
          {carouselData.map((obj: { sliderImage: any }, index: any) => (
            <>
              <CarouselItem key={index}>
                <Image
                  src={urlFor(obj.sliderImage).url()}
                  alt="slider-image"
                  height={1000}
                  width={2000}
                  key={index}
                  className="h-full sm:h-5/6 w-full object-fill"
                />
              </CarouselItem>
            </>
          ))}
        </CarouselContent>

        <div className="absolute left-16 top-1/2 sm:top-1/3">
          <CarouselPrevious />
        </div>
        <div className="absolute right-16 top-1/2 sm:top-1/3">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBannerWrapper;
