import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Providers from "./Providers";
import SideBar from "./SideBar";
SideBar

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Mensajero",
  description: "News from LatinAmerica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
            <div className="max-w-7xl mx-auto">{children}</div>
        </Providers>
      </body> 
    </html>
  );
}
