import Link from "next/link";
import Image from "next/image";
import ImagenHero from '../../../public/Images/capture_illu_bottom.png';

// Definición del componente Hero
export default function Hero() {
    return (
        <>
            {/* Contenedor de la sección de héroe */}
            <section className="hero-container text-black bg-white flex p-2 pt-20 md:pt-0 flex-col md:flex-row justify-center items-center min-h-[640px] gap-10">
                {/* Contenido de texto del héroe */}
                <div className="hero-text">
                    {/* Título principal */}
                    <h1 className="text-3xl text-blue-500 m-4 max-w-xl font-bold">EXPLORA LOS 10 PRIMEROS POKEMONES DE LA POKEDEX</h1>
                    {/* Descripción */}
                    <p className="m-4 max-w-xl text-balance">Descubre de qué tipo es tu Pokémon inicial favorito, todo el listado de sus habilidades y sus atributos.</p>
                    {/* Botón de acción */}
                    <button className="bg-zinc-200 p-2 rounded-md m-4 font-bold border-2 border-black hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                        PROBAR APP
                    </button>
                </div>
                {/* Imagen del héroe */}
                <Image
                    width={600}
                    height={600}
                    src={ImagenHero}
                    alt="hero-image"
                    className="object-cover p-4"
                />
            </section>
        </>
    );
}
