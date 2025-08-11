import Header from "@/components/header";
import "./globals.css";
import Image from "next/image";
import Emailcard from "@/components/email";
import { Numbercounter } from "@/components/number-counter";
import { ArrowDown } from "lucide-react";
import Timecounter from "@/components/time-counter";
import Analysis from "@/components/analysis";
import { Features } from "@/components/features";
import Buttons from "@/components/downloads";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center p-4 animate-slideUp animation-delay-100 pb-16">
      <div>
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center space-y-16 p-4 md:mt-4">
        <h1 className="scroll-m-20 text-center text-5xl font-extrabold text-balance border-b-8 pb-1 border-primary">
          Stay Healthy with one scan
        </h1>
        <p className="scroll-m-20 text-center text-xl md:text-2xl font-600 text-balance ">
          BestBelly is a health score calculator that helps you pick the healthy
          food products in supermarket. Scan the ingredients to get the health
          score of the product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          <Image
            src="/hero.png"
            alt="Product illustration"
            width={340}
            height={340}
            priority={true}
            unoptimized={true}
            blurDataURL="URL"
            placeholder="blur"
            className="md:block hidden hover:scale-112 delay-70 duration-200 ease-in-out"
          />
          <Image
            src="/score.png"
            alt="Score card illustration"
            unoptimized={true}
            width={340}
            height={340}
            priority={true}
            blurDataURL="URL"
            placeholder="blur"
            className="md:hover:scale-112 delay-70 duration-200 ease-in-out"
          />
        </div>
        <Timecounter />
        <div className="flex flex-col items-center">
          <h1 className="scroll-m-20 min-w-1 text-center grid grid-rows-2 gap-1 md:gap-2 text-3xl md:text-5xl font-extrabold text-balance">
            <Numbercounter
              end={326}
              duration={2500}
              className="text-2xl md:text-4xl text-chart-2"
            />
            Users Subscribed Already
          </h1>
          <div className="flex justify-center items-center size-16 mt-4 mb-4 lg:mb-10 border-2 border-gray-400 rounded-full animate-bounce">
            <ArrowDown className="size-7" />
          </div>
          <Emailcard />
        </div>
        <Analysis />
        <Features />
        <div className="justify-center">
          <Buttons />
        </div>
        <Footer />
      </div>
    </div>
  );
}
