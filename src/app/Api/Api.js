import React, { useEffect, useState } from 'react';
import { PokemonCard } from '@/app/Componentes/PokemonCard';

const PokemonList = () => {
    // Estado para almacenar la lista de Pokémon
    const [pokemon, setPokemon] = useState([]);
    // Estados para gestionar el orden ascendente y descendente
    const [ordenAscendente, setOrdenAscendente] = useState(true);
    const [ordenDescendente, setOrdenDescendente] = useState(false);

    // Efecto secundario que se ejecuta al montar el componente
    useEffect(() => {
        const ApiURL = "https://pokeapi.co/api/v2/pokemon/"
        let pokemonData = [];

        for (let i = 1; i <= 10; i++) {
            fetch(ApiURL + i)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error al realizar la solicitud. Código de estado: ${response.status}`)
                    }
                    return response.json()
                })
                .then(data => {
                    // Normaliza los valores de peso y altura dividiéndolos por 10
                    data.weight = data.weight / 10;
                    data.height = data.height / 10
                    pokemonData.push(data);
                    // Cuando se han cargado los datos de los 10 Pokémon, actualiza el estado
                    if (pokemonData.length === 10) {
                        setPokemon(pokemonData);
                    }
                })
                .catch(error => {
                    console.error('Ha ocurrido un error:', error);
                });
        }
    }, []); 

    // Función para ordenar la lista de Pokémon según la condición proporcionada
    function handleSort(condicion) {
        const sortedPokemon = [...pokemon].sort((a, b) => a[condicion] - b[condicion]);
        setPokemon(sortedPokemon);
    }

    // Función para ordenar la lista de Pokémon en orden descendente
    function Descendente() {
        // Implementa la lógica necesaria para orden descendente
        // Puedes utilizar el estado ordenDescendente para cambiar la lógica de ordenamiento
    }

    // Renderiza el componente
    return (
        <div className='bg-custom-gray p-10' id='probar'>
            <h4 className='text-lg text-center text-white font-bold m-2'>Organizar por:</h4>
            <div className='flex flex-row gap-3 flex-wrap justify-center items-center h-16'>
                {/* Botones para ordenar por número, peso y altura */}
                <button onClick={() => handleSort('id')} className='bg-lime-500 font-semibold p-2 rounded-lg'>Numero</button>
                <button onClick={() => handleSort('weight')} className='bg-blue-500 font-semibold p-2 rounded-lg'>Peso</button>
                <button onClick={() => handleSort('height')} className='bg-orange-500 p-2 font-semibold rounded-lg'>Altura</button>
                {/* Botones para orden ascendente y descendente */}
                <button onClick={() => { setOrdenAscendente(false); setOrdenDescendente(true); }} className='bg-pink-500 font-semibold p-2 rounded-lg'>Descendente</button>
                <button onClick={() => { setOrdenAscendente(true); setOrdenDescendente(false); }} className='bg-yellow-400 font-semibold p-2 rounded-lg'>Ascendente</button>
            </div>

            {/* Lista de Pokémon renderizada en función del orden, para controlar su orden descendente se invierte el orden ascendente por medio de estilos */}
            <div className={`flex ${ordenDescendente ? 'flex-row-reverse' : 'flex-row'} overflow-x-auto gap-2 justify-start items-center mt-20 `}>
                {pokemon.map(pokemons => (
                    <PokemonCard pokemon={pokemons} key={pokemons.id} />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
