import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./Componentes/Nav";
import Footer from './Componentes/Footer';

const monse = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "POKE FOO",
  description: "Los pokemones son increibles y mas cuando los conoces como tu propia palma de la mano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monse.className}>
      <Nav />
        {children}
      <Footer />
      </body>
    </html>
  );
}
