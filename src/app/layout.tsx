import type { Metadata } from "next";
import { Murecho } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./context/Provider";
import Header from "@/components/layouts/Header";

const murecho = Murecho({
  variable: "--font-murecho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oklahoma Criminal Lawyer",
  description: "Oklahoma #1 Criminal Defense Attorney",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${murecho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}