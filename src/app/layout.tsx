import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarsCode 编程助手 - 智慧懂你的AI编程伙伴",
  description: "MarsCode是一款智慧懂你的AI编程助手，基于大语言模型技术，为开发者提供智能代码补全、错误检测和编程建议，支持Python等多种编程语言。",
  keywords: [
    "AI",
    "AI编程", 
    "大模型",
    "编程",
    "Python",
    "代码补全",
    "智能编程",
    "MarsCode",
    "编程助手"
  ],
  authors: [{ name: "云中江树" }],
  creator: "云中江树",
  publisher: "LangGPT社区",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://marscode.com",
    siteName: "MarsCode",
    title: "MarsCode 编程助手",
    description: "智慧懂你的AI编程助手",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarsCode 编程助手",
    description: "智慧懂你的AI编程助手",
    images: ["/twitter-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}