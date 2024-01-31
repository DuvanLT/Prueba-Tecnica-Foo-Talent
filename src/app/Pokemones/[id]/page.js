'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Definición del componente PokemonPage
const PokemonPage = () => {
    // Obtiene los parámetros de la URL, incluido el ID del Pokémon
    const params = useParams();
    let id;
    if (params) {
        id = params.id;
    }

    // Estado para almacenar los datos del Pokémon
    const [pokemon, setPokemon] = useState(null);

    // Efecto secundario que se ejecuta al montar el componente o cuando cambia el ID del Pokémon
    useEffect(() => {
        // Realiza una solicitud a la PokeAPI para obtener los datos del Pokémon
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                // Normaliza los valores de peso y altura dividiéndolos por 10
                data.weight = data.weight / 10;
                data.height = data.height / 10;
                // Actualiza el estado con los datos del Pokémon
                setPokemon(data);
            })
            .catch(error => console.error('Error:', error));
    }, [id]);

    // Si los datos del Pokémon aún no han cargado, muestra un mensaje de carga
    if (!pokemon) return <div>Cargando...</div>;

    // Renderiza la página del Pokémon con la información obtenida de la PokeAPI
    return (
        <>
            <div className='mt-24 mb-20'>
                {/* Enlace para regresar a la página principal */}
                <div className='flex justify-start items-start flex-col m-10'>
                    <Link href="/" className='h-20 flex items-center justify-center'>
                        <span className='bg-rose-500 p-2 rounded-2xl font-semibold'>Regresar</span>
                    </Link>
                    {/* Información detallada del Pokémon */}
                    <h2 className='text-4xl font-semibold mb-5 uppercase'>#{pokemon.id} {pokemon.name}</h2>
                    <div className='flex gap-2 md:gap-10 flex-wrap'>
                        <p><span className='font-semibold'>Peso:</span> {pokemon.weight}kg</p>
                        <p><span className='font-semibold'>Altura:</span> {pokemon.height}m</p>
                        <p><span className='font-semibold'>Experiencia Base:</span> {pokemon.base_experience}</p>
                        <p><span className='font-semibold'>Habilidades:</span> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                        <p><span className='font-semibold'>Tipos:</span> {pokemon.types.map(type => type.type.name).join(', ')}</p>
                    </div>
                </div>
                {/* Imágenes del Pokémon */}
                <picture className='flex justify-center items-center'>
                    <img src={pokemon.sprites.front_default} alt="Imagen frontal del Pokémon" className='w-40' />
                    <img src={pokemon.sprites.back_default} alt="Imagen trasera del Pokémon" className='w-40' />
                    <img src={pokemon.sprites.front_shiny} alt="Imagen frontal del Pokémon shiny" className='w-40' />
                    <img src={pokemon.sprites.back_shiny} alt="Imagen trasera del Pokémon shiny" className='w-40' />
                </picture>
                {/* Lista de todos los movimientos posibles del Pokémon */}
                <h3 className='text-2xl font-semibold mb-5 ml-10'>TODOS LOS MOVIMIENTOS POSIBLES:</h3>
                <p className='m-10'>{pokemon.moves.map(move => move.move.name).join(', ')}</p>
            </div>
        </>
    );
};

export default PokemonPage;
