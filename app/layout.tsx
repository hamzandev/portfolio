import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hamzan Wahyudi",
  description: "Portfolio Hamzan Wahyudi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="py-20 overflow-y-hidden">{children}</main>
          <footer className="footer py-4 text-center border-t border-t-foreground/1 bg-foreground/10">
            <span className="font-medium">
              Created with 💖 by Hamzan Wahyudi.
            </span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
