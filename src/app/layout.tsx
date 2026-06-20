import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HY | 前端开发工程师",
    template: "%s | HY",
  },
  description: "HY 的个人展示网站，聚焦 React、Next.js、TypeScript、Web3、浏览器插件与技术博客。",
  metadataBase: new URL("https://www.akkc38.cn"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <Link href="/" aria-label="HY 首页" className="transition opacity-95 hover:opacity-100">
              <BrandMark />
            </Link>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <Link className="transition hover:text-white" href="/">
                首页
              </Link>
              <Link className="transition hover:text-white" href="/resume">
                简历
              </Link>
              <a className="transition hover:text-white" href="https://blog.akkc38.cn/" target="_blank" rel="noopener noreferrer">
                博客
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
          <p>HY Personal Showcase. Built with Next.js, TypeScript and Tailwind CSS.</p>
        </footer>
      </body>
    </html>
  );
}
