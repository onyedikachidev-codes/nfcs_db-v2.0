import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen dark:bg-primary-700 dark:text-primary-200">
      <Header />

      <div className="grid grid-cols-[16rem_1fr] h-full">
        <Sidebar />
        <div className="bg-blue-50 dark:bg-primary-700 dark:text-primary-200">
          {children}
        </div>
      </div>
    </div>
  );
}
