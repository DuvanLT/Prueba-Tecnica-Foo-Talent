import Pokemon from '../../../public/Images/hero-imagen.png';
import Image from 'next/image';

// Definición del componente Informacion
export default function Informacion() {
    return (
        <>
            {/* Contenedor principal */}
            <div className='flex justify-center items-center flex-col gap-4 m-10' id='Que-es'>
                {/* Artículo que contiene la información sobre Pokémon */}
                <article className='flex flex-col gap-3 max-w-[900px]'>
                    {/* Título del artículo */}
                    <h3 className='text-xl font-semibold'>¿QUÉ ES POKÉMON?</h3>
                    {/* Párrafos con información sobre Pokémon */}
                    <p>
                        Pokémon es una franquicia de medios creada por Nintendo, Game Freak y Creatures. Fue introducida por primera vez en 1996 por Nintendo, Game Freak y Creatures para la consola Game Boy. La palabra Pokémon es una romanización de la marca japonesa Pocket Monsters (ポケットモンスター), que significa monstruos de bolsillo.
                    </p>
                    <p>
                        La franquicia Pokémon abarca videojuegos, series de televisión, películas, juegos de cartas coleccionables, juguetes y otros productos relacionados. La premisa central de Pokémon involucra a entrenadores, que son personajes ficticios, que capturan y entrenan criaturas llamadas Pokémon para batallar entre sí. Los Pokémon tienen habilidades diversas y evolucionan a formas más fuertes a medida que ganan experiencia en las batallas.
                    </p>
                </article>
                {/* Imagen de Pokémon */}
                <picture>
                    <Image
                        src={Pokemon}
                        width={300}
                        height={300}
                        alt='Pokemon image'
                    />
                </picture>
            </div>
        </>
    );
}
