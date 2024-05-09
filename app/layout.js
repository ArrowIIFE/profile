import Header from "@/components/Header";
import { getDocument } from "@/lib/docs";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const getAllDocument = getDocument();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={getAllDocument} />
          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto py-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
