import "@/app/_styles/globals.css";

import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import AppLayout from "./_components/AppLayout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s | nfcs-lasu database",
    default: "Nfcs-lasu database",
  },
  description: "A database of all members of NFCS LASU chapter",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased min-h-screen `}>
        <AppLayout>
          <div>{children}</div>
        </AppLayout>
      </body>
    </html>
  );
}
