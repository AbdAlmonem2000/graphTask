import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html className="bg-blue-100" lang="en">
      <body className={inter.className }>
        <div className="px-5 ">
          {children}
        </div>
      </body>
    </html>
  );
}
