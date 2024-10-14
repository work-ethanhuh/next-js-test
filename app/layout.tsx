import type { Metadata } from "next";
import "./assets/scss/style.scss";

export const metadata: Metadata = {
  title: "EthanHuh 포트폴리오 사이트 - Next-JS",
  description: "개인 포트폴리오 사이트입니다",
  keywords: ["포트폴리오", "리액트", "넥스트", "EthanHuh", "portfolio", "react.js", "next.js", "hethan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
