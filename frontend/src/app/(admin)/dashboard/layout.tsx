import { Sidebar } from "@/app/components/admin/Sidebar";
import Topbar from "@/app/components/admin/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Topbar />
      <Sidebar />
      {children}
    </section>
  );
}
