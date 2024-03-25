import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Logo from "../app/assets/ai-logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Titan AI",
  description: "Powered By Anas Yakubu",
  icons: {
    icon: Logo,
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
