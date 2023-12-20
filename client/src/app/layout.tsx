"use client";
import { store } from "@/store/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Momentz",
  description: "Your new favorite social media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
