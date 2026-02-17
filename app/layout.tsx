import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Google Login",
  description: "Google 계정으로 안전하게 로그인하는 인증 페이지"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
