import Image from "next/image";

export default function Buttons() {
  return (
    <div className="flex gap-4 md:gap-10 min-w-full">
      <button className="flex justify-start items-center hover:scale-110 transition-all duration-300s">
        <Image
          src="/google.png"
          alt="google playstore badge"
          width={260}
          height={260}
          priority={true}
          unoptimized={true}
          blurDataURL="URL"
          placeholder="blur"
        />
      </button>
      <button className="flex justify-start items-center hover:scale-110 transition-all duration-300s">
        <Image
          src="/apple.svg"
          alt="google playstore badge"
          width={240}
          height={240}
          priority={true}
          unoptimized={true}
          blurDataURL="URL"
          placeholder="blur"
        />
      </button>
    </div>
  );
}
