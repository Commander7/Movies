import { Inter } from "next/font/google";
import "./globals.css";
import Header from " @/components/Header"; // alias to replace ..

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whatmovie",
  description: "Find your movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
