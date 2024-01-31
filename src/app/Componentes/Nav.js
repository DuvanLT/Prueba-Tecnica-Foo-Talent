// Importa los elementos necesarios de React y Next.js
'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

// Importa la imagen de la pokebola desde la ruta especificada
import pokebola from '../../../public/Images/pokeball.png'

// Define y exporta el componente de navegación
export default function Nav() {
    // Define un estado para controlar el estado de la navegación (abierto/cerrado)
    const [nav, setNav] = useState(false)

    // Función que se ejecuta al hacer clic en el botón del menú para cambiar el estado de la navegación
    const handleClick = () => {
        setNav(!nav)
    }

    // Renderiza el componente de navegación
    return (
        <>
            {/* Encabezado que contiene la barra de navegación */}
            <header className='flex justify-between w-screen h-20 items-center fixed z-40 bg-blue-500'>
                {/* Barra de navegación principal */}
                <nav className='flex md:justify-evenly w-screen items-center'>
                    {/* Sección del logotipo y el enlace principal */}
                    <div className='text-black flex gap-4 text-lg md:text-xl font-semibold z-50 ml-4'>
                        <Image
                            src={pokebola}
                            width={32}
                            height={32}
                            alt="pokebola"
                        />
                        <Link href="/" className='z-50' >POKE FOO</Link>
                    </div>
                    {/* Lista de enlaces de navegación */}
                    <ul className={`flex flex-col font-extrabold justify-center items-center absolute bg-blue-500 w-screen h-screen z-50 gap-4 text-xl md:text-xs transition-all duration-300 md:flex-row md:relative md:w-fit md:h-fit ${nav ? "closeNav" : "openNav"}`}>
                        <li>
                            <Link href="/" onClick={handleClick} className='hover:text-white'>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <a href="#probar" onClick={handleClick} className='hover:text-white'>
                                PROBAR APP
                            </a>
                        </li>
                        <li>
                            <a href="#Que-es" onClick={handleClick} className='hover:text-white'>
                                ¿QUE ES POKEMON?
                            </a>
                        </li>
                        <li>
                            <a href="#redes" onClick={handleClick} className='hover:text-white'>
                                REDES SOCIALES
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Botón del menú para dispositivos móviles */}
                <div className='menu block text-black z-50 m-8 cursor-pointer md:hidden ' onClick={handleClick}>
                    <div className='h-1 w-10 bg-black rounded'></div>
                    <div className='h-1 w-10 mt-1.5 bg-black rounded'></div>
                    <div className='h-1 w-10 mt-1.5 bg-black rounded'></div>
                </div>
            </header>
        </>
    )
}
