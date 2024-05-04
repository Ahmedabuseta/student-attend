"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";

interface Image {
  name: string;
  src: string;
}

function importAll(r: __WebpackModuleApi.RequireContext): Image[] {
  return r.keys().map((item, index) => ({
    name: item.replace("./", ""),
    src: r(item).default,
  }));
}

const images: Image[] = importAll(
  require.context("../data", false, /\.(png|jpe?g|svg)$/)
);

export function InfiniteMovingCards_1() {
  const images_1 = images.slice(0, 7);
  const images_2 = images.slice(7, 14);
  const images_3 = images.slice(14, 21);
  return (
    <div className="  bg-black rounded-md flex flex-col gap-4 antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="border-b-white border-b-2 text-3xl my-3 shadow-sm bg-gradient-to-b from-indigo-900 to-indigo-600 px-4 py-3 rounded-lg  text-white pb-2 text-center ">
        بعض التعليقات عنا
      </h2>
      <div className=" py-3 px-4 rounded-lg bg-gradient-to-r from-gray-900 to-from-gray-600 overflo-hidden">
        <InfiniteMovingCards
          items={images_2}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
      <div className=" py-3 px-4 rounded-lg bg-gradient-to-l from-slate-900 to-black overflo-hidden">
        <InfiniteMovingCards
          items={images_1}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
      <div className=" py-3 px-4 rounded-lg bg-gradient-to-r from-neutral-900 to-black overflo-hidden">
        <InfiniteMovingCards
          items={images_3}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
