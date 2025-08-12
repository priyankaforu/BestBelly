import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = localFont({
  src: [
    {
      path: "./Inter-VariableFont.ttf",
      weight: "100 900",
    },
  ],
});

export const metadata: Metadata = {
  title: "BestBelly - Nutri Score Checker & Health Food Scanner",
  description:
    "BestBelly is the ultimate health score calculator that helps you pick healthy food products in supermarkets. Scan ingredients to get instant nutri scores and make informed food choices. Stay healthy with one scan!",
  metadataBase: new URL("https://bestbelly.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          {/* Global styles and components can be added here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
