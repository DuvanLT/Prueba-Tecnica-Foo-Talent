'use client'
import Api from '@/app/Api/Api'
import Hero from './Componentes/Hero'
import Informacion from './Componentes/Informacion';


export default function Home() {
  return (
    <>
    <Hero />
    <Api />
    <Informacion />
    </>
  );
}
