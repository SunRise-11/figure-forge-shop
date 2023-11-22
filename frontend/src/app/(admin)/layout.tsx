import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "../components/admin/Topbar";
import { Sidebar } from "../components/admin/Sidebar";

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
<<<<<<< HEAD
        <body className={poppins.className}>
          <Topbar />
          <Sidebar />
          {children}
        </body>
=======
        <body className={poppins.className}>{children}</body>
>>>>>>> c558618 (The admin access changes were reverted)
      </UserProvider>
    </html>
  );
}
