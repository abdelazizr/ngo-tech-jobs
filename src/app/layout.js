import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

const fontSans = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata = {
  title: "NGO Tech Jobs - Find Purpose-Driven Work",
  description: "Curated tech jobs in the NGO and non-profit sector.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
