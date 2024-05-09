import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "有感地震查詢 | %s",
    absolute: "有感地震查詢｜首頁",
  },
  // verification: {
  //   google:'aVUBlVSKtubvf21M-vKyrwh_n1GvbTUFnU9KtTWUqc8'

  // },
  description:
    "查詢台灣過去有感地震",
  icons: "favicon.ico",
  keywords: ["Taiwan", "台灣", "臺灣", "台灣地震", "earthquake", "history"],
  openGraph: {
    title: { template: "有感地震查詢 | %s", absolute: "有感地震查詢｜首頁" },
    description:
      "查詢台灣過去有感地震",
    type: "website",
    images: "",
    siteName: "有感地震查詢",
    locale: "zh_TW",
    url:"http://localhost:3000"
  },
  generator: "Next.js",
  applicationName: "有感地震查詢",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(' w-screen h-full bg-slate-200 m-0 p-0',inter.className)}>{children}</body>
    </html>
  );
}
