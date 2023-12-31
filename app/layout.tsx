import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";
import CheckAuthenticated from "@/components/TokenCheckComponent/CheckAuthenticated";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
    <html lang="en">
      <body className={`${poppins.className} overflow-hidden`}>
        <main className="flex h-screen min-[2000px]:container">
          <Sidebar/>
          {/* <CheckAuthenticated/> */}
          <section className="w-full md:w-[calc(100vw-200px)]  xl:w-[calc(100vw-280px)] 2xl:w-[calc(100vw-300px)] 3xl:w-[calc(100vw-320px)] !overflow-hidden h-screen">
            {children}
          </section>
        </main>
      </body>
    </html>
    </ReactQueryProvider>
  );
}
