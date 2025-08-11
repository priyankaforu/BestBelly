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
  title: "A nutri score checking app",
  description:
    "This app is used to check the nutri score products, available in the market",
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
          defaultTheme="system"
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
