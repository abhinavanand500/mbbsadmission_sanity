import React from "react";
import { Tabs, Tab } from "./TabComponent";
import { Skeleton } from "@/components/ui/skeleton";

const ShimmerUIBlog = () => {
  return (
    <div>
      <Tabs>
        <Tab
          label={
            <Skeleton className="w-30 sm:w-80 h-[40px] rounded-full items-stretch " />
          }
        >
          <div className="py-4 md:flex items-center justify-center mx-6 md:mx-1">
            <div className="flex flex-col space-y-3 my-20 md:my-4 md:mx-6">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 my-20 md:my-4 md:mx-6">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 my-20 md:my-4 md:mx-6">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 my-20 md:my-4 md:mx-6">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab
          label={
            <Skeleton className="w-30 sm:w-80 h-[40px] rounded-full items-stretch" />
          }
        ></Tab>
        <Tab
          label={
            <Skeleton className="w-30 sm:w-80 h-[40px] rounded-full items-stretch" />
          }
        ></Tab>
        <Tab
          label={
            <Skeleton className="w-30 sm:w-80 h-[40px] rounded-full items-stretch" />
          }
        ></Tab>
      </Tabs>
    </div>
  );
};

export default ShimmerUIBlog;
