import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 space-x-2 md:space-x-8 mb-4 justify-center items-center">
        <div className="grid grid-rows-3 space-y-1 text-xs text-gray-700 dark:text-gray-400 underline justify-end items-center">
          <Link href="/" className="dark:hover:text-gray-200">
            Privacy Policy
          </Link>
          <Link href="/" className="dark:hover:text-gray-200">
            Terms
          </Link>
          <Link href="/" className="dark:hover:text-gray-200">
            Features
          </Link>
        </div>
        <div className="grid grid-rows-3 space-y-1 text-xs text-gray-700 dark:text-gray-400 underline justify-end items-center">
          <Link href="/" className="dark:hover:text-gray-200">
            Updates
          </Link>
          <Link href="/" className="dark:hover:text-gray-200">
            Blog
          </Link>
          <Link href="/" className="dark:hover:text-gray-200">
            About
          </Link>
        </div>
        <div className="grid grid-rows-3 space-y-1 text-xs text-gray-700 dark:text-gray-400 underline justify-end items-center">
          <Link href="/" className="dark:hover:text-gray-200">
            Contact
          </Link>
          <Link href="/" className="dark:hover:text-gray-200">
            Google Play
          </Link>
          <Link href="/" className="dark:hover:text-gray-200">
            App Store
          </Link>
        </div>
      </div>
      <div className="text-xs text-center">
        Made with ❤️ on 🇮🇳 by © Priyanka Pudi 2025{" "}
      </div>
    </div>
  );
}
