import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={poppins.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
