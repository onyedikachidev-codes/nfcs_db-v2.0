import "@/app/_styles/globals.css";
import AppLayout from "@/components/layout/AppLayout";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s | DB",
    default: "DB",
  },
  description: "A database of all members of an organisation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased min-h-screen `}>
        <AppLayout>
          <div>{children}</div>
        </AppLayout>
      </body>
    </html>
  );
}
