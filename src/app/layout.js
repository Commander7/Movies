import { Inter } from "next/font/google";
import "./globals.css";
import Header from " @/components/Header"; // alias to replace ..
import Providers from "./Providers";
import Navbar from " @/components/Navbar";
import SearchBox from " @/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Movies",
  description: "Find your movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <Navbar/>
        <SearchBox/>
        {children}
        </Providers>
        </body>
        
    </html>
  );
}
