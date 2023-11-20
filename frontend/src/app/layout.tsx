import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/public/Navbar";
import Footer from "./components/public/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Figure Forge",
  description: "Your trusted action figure shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={poppins.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
