'use client'
import Api from '@/app/Api/Api'
import Nav from './Componentes/Nav';
import Hero from './Componentes/Hero'
import Informacion from './Componentes/Informacion';
import Footer from './Componentes/Footer';

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <Api />
    <Informacion />
    <Footer />
    </>
  );
}
