import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";
import RecoilWrapper from "@/atoms/RecoilWrapper";
import QueryClientWrapper from "@/atoms/QueryClientWrapper";

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dream INN",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <QueryClientWrapper>
          <RecoilWrapper>
            {children}
          </RecoilWrapper>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
