
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Typist",
  description: "Typist is a simple, elegant, and modern typing tool which let's you know how fast your typing speed is.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body

      >
        {" "}
        <div className={`bg-gradient-to-br w-full from-blue-900 via-blue-600 to-blue-400 h-screen`}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="TypistTheme"
          >
            {children}{" "}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
