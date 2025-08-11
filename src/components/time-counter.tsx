"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import Buttons from "@/components/downloads";

const Timecounter = () => {
  const [eventDate, setEventDate] = useState("2026-02-15");
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (eventDate) {
      const countDownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;
        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countDownInterval);
          toast("Product Launching soon!!!");
        }
        setTimeRemaining(remainingTime);
      }, 1000);
      return () => {
        if (countDownInterval) {
          clearInterval(countDownInterval);
        }
      };
    }
  }, [eventDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return (
      <div
        className="flex flex-col border border-gray-600 p-10 lg:min-w-[720px] rounded-xl 
  bg-gradient-to-br from-red-600/90 via-gray-300/10 to-red-500/30 
  dark:bg-gradient-to-br dark:from-primary/50 dark:via-gray-800/20 dark:to-chart-2/40
  hover:bg-gradient-to-tl hover:from-red-600/90 hover:via-red-300/30 hover:to-red-400/60
  dark:hover:bg-gradient-to-tl dark:hover:from-primary/70 dark:hover:via-chart-2/30 dark:hover:to-primary/60
  hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 hover:-translate-y-1
  dark:hover:shadow-2xl dark:hover:shadow-primary/25
  transition-all duration-700 ease-out transform-gpu cursor-pointer"
      >
        <div className="grid grid-rows-1 lg:grid-rows-2">
          <h1 className="text-2xl md:text-4xl font-bold ">
            🧑‍🍳 I am cooking{" "}
            <span className="bg-highlight p-1 leading-relaxed rounded-sm">
              Nutritious Food For You
            </span>
          </h1>
          <p className="font-semibold text-xl mt-1 md:mt-2">
            🥗🤤 Food Gets Ready in...
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-4/5 pt-1 pb-4 md:py-4">
          <div
            className="border-b-6 px-1 md:border-1 flex md:justify-center items-center flex-col
            border-primary md:rounded-lg pt-4 md:px-2"
          >
            <div className="grid md:grid-rows-2 text-2xl md:text-4xl font-bold font-mono leading-none">
              {days.toString().padStart(2, "0")}{" "}
              <span className="text-xs sm:text-sm font-normal flex">days</span>
            </div>
          </div>
          <div
            className="border-b-6 px-1 md:border-1 flex md:justify-center items-center flex-col
            border-primary md:rounded-lg pt-4 md:px-2"
          >
            <div className="grid grid-rows-2 text-2xl md:text-4xl font-bold font-mono leading-none">
              {hours.toString().padStart(2, "0")}{" "}
              <span className="text-xs sm:text-sm font-normal flex">
                {" "}
                hours
              </span>
            </div>
          </div>
          <div
            className="border-b-6 px-1 md:border-1 flex md:justify-center items-center flex-col
            border-primary md:rounded-lg pt-4 md:px-2"
          >
            <div className="grid grid-rows-2 text-2xl md:text-4xl font-bold font-mono leading-none">
              {minutes.toString().padStart(2, "0")}{" "}
              <span className="text-xs sm:text-sm font-normal flex">min</span>
            </div>
          </div>
          <div
            className="border-b-6 px-1 md:border-1 flex md:justify-center items-center flex-col
            border-primary md:rounded-lg pt-4 md:px-2"
          >
            <div className="grid grid-rows-2 text-2xl md:text-4xl font-bold font-mono leading-none">
              {seconds.toString().padStart(2, "0")}{" "}
              <span className="text-xs sm:text-sm font-normal flex">sec</span>
            </div>
          </div>
        </div>
        <Buttons />
      </div>
    );
  };
  return (
    <>
      <div>
        {timeRemaining !== null ? formatTime(timeRemaining) : "Loading..."}
      </div>
    </>
  );
};

export default Timecounter;
