import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./header/Header";
import Providers from "./Providers";
import SideBar from "./SideBar";
SideBar

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mensajero",
  description: "Camino directo a la información global",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/mensajero-favicon-black.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/mensajero-favicon-white.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
            <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body> 
    </html>
  );
}
