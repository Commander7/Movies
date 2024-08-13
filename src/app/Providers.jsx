"use client";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";


export default function Providers({children}) {
  return (
  <ThemeProvider defaultTheme="system" attribute="class">
   <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-800 min-h-screen select-none transition-colors duration-300">
    <Suspense>
       {children}
       </Suspense>
   </div>

  </ThemeProvider>
  );
}
