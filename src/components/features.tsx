"use client";
import React from "react";

export function Features() {
  return (
    <div className="justify-center items-center lg:w-[70%] sm:w-[80%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="space-y-8">
          <div className="flex gap-3 justify-center items-start">
            <div className="text-2xl">🍕</div>
            <div className="grid grid-rows items-center-safe">
              <div className="text-lg font-bold">Eat Healthy Pizzas</div>
              <div className="text-sm  text-gray-600 dark:text-gray-400">
                Now say good bye to the junk pizzas. You can choose a healthy
                junk food with the one scan.
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-3 justify-center items-start">
              <div className="text-2xl">☀️</div>
              <div className="grid grid-rows items-center-safe">
                <div className="text-lg font-bold">Enjoy the themes</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Choose the themes and toggles modes between light or dark and
                  select the colors
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-3 justify-center items-start">
              <div className="text-xl">✅</div>
              <div className="grid grid-rows items-center-safe">
                <div className="text-lg font-bold">Save Products</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Add the healthy products to your favourites and get rid of
                  scanning again and again.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex gap-3 justify-center items-start">
            <div className="text-xl">⬆️</div>
            <div className="grid grid-rows items-center-safe">
              <div className="text-lg font-bold">Unlimited Uploads</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                You can check the score for unlimited products in the
                supermarket. And get immediate health score
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-3 justify-center items-start">
              <div className="text-2xl">🔥</div>
              <div className="grid grid-rows items-center-safe">
                <div className="text-lg font-bold">Monthly Report</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 ">
                  Analysis based on total number of healthy products purchased
                  in that month
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-3 justify-center items-start">
              <div className="text-xl">📊</div>
              <div className="grid grid-rows items-center-safe">
                <div className="text-lg font-bold">Ingredient Analysis</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 ">
                  A detailed chart on total no.of unhealthy products availabel
                  in the market. With specifications
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex gap-3 justify-center items-start">
            <div className="text-xl">👍</div>
            <div className="grid grid-rows items-center-safe">
              <div className="text-lg font-bold">100% Accuracy</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 ">
                Highly accurate Nutri Score Rating after 2 layer data analysis
                on every food product in the market
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-3 justify-center items-start">
              <div className="text-xl">🤩</div>
              <div className="grid grid-rows items-center-safe">
                <div className="text-lg font-bold">Product Suggestions</div>
                <div className="text-sm  text-gray-600 dark:text-gray-400 ">
                  Get Realtime product suggestions on all the healthy products
                  with proof of nutri scores.
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-center items-start">
              <div className="text-xl">🔒</div>
              <div className="grid grid-rows items-center-safe">
                <div className="text-xl font-bold">Privacy</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Your data is safe inside the app. No information can be shared
                  without your consent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
