import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Typewriter from "@/components/typewriter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};
export default function Contact() {
  return (
    <div className="animate-fadeInUp">
      <Header />

      <div className="min-h-screen flex flex-col  justify-start items-center px-10 md:px-4 py-6 gap-24">
        <div className="flex flex-col items-start gap-6 max-w-4xl w-full text-center">
          <div className="flex-shrink-0">
            <Image
              src="/creator.png"
              alt="developer illustration"
              width={130}
              height={200}
              priority={true}
              unoptimized={true}
              blurDataURL="URL"
              placeholder="blur"
              className="rounded-2xl w-24 h-auto sm:w-32 md:w-36 lg:w-40 object-cover shadow-lg"
            />
          </div>
          <Typewriter />
          <div className="text-sm md:text-lg text-left">
            BestBelly lets you scan any food product and instantly see its
            health score, revealing harmful ingredients at a glance. Designed
            for those who believe health is the greatest wealth, it’s especially
            valuable in countries like India where Nutri-Scores aren’t printed
            on packaging. Our mission is to empower you to make healthier
            choices every day. Have ideas, feature requests, or found an issue?
            Write to me at{" "}
            <Link
              href="mailto:priyankapudi4u@gmail.com"
              className="underline  text-red-500 dark:text-chart-2/70 cursor-pointer"
            >
              email
            </Link>{" "}
            or connect on{" "}
            <Link
              href="https://x.com/priyankapudi"
              className="underline  text-red-500 dark:text-chart-2/70 cursor-pointer"
            >
              Twitter
            </Link>{" "}
            — I’d love your feedback.
          </div>
        </div>
        <div className="mb-2 md:mb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
