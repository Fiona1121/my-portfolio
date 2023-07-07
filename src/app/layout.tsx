import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light`}>
        <NavBar />
        {children}
        <HireMe />
        <Footer />
      </body>
    </html>
  );
}
