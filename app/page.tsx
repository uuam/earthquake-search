import PrintData from "@/components/print-data";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "有感地震查詢｜首頁",
  // verification: {
  //   google:'aVUBlVSKtubvf21M-vKyrwh_n1GvbTUFnU9KtTWUqc8'

  // },
  description: "查詢台灣過去有感地震",
  icons: "favicon.ico",
  keywords: ["Taiwan", "台灣", "臺灣", "台灣地震", "earthquake", "history"],
  openGraph: {
    title: { template: "有感地震查詢 | %s", absolute: "有感地震查詢｜首頁" },
    description: "查詢台灣過去有感地震",
    type: "website",
    images: "",
    siteName: "有感地震查詢",
    locale: "zh_TW",
    url: "http://localhost:3000",
  },
  generator: "Next.js",
  applicationName: "有感地震查詢",
};

export default async function Home() {

  return (
    <main className=" px-10  mx-auto my-6">
      <PrintData />
    </main>
  );
}
