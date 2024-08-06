import {
  Poppins,
  Open_Sans,
  Montserrat,
  Fredericka_the_Great,
} from "next/font/google";
import Navbar from "@/components/landing/ui/Navbar";
import { UserProvider } from "./store/UserContext";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
const frederickaTheGreat = Fredericka_the_Great({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  variable: "--font-fredericka-the-great",
});

export const metadata = {
  title: "Dudes Get Dates",
  description: "Chat less date more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${poppins.variable} ${montserrat.variable} ${frederickaTheGreat.variable} scroll-smooth antialiased focus:scroll-auto`}
      >
        <UserProvider>
          <Navbar />
        </UserProvider>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
