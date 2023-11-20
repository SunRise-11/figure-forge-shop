export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>admin layout</h1>
      {children}
    </section>
  );
}
