import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header/Header'
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "imdb movie app",
  description: "rating movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* provider is used for the dark mode */}
        <Providers>
          <Header />
          {children}
        </Providers>
        </body>
    </html>
  );
}
