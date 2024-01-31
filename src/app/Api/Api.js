import React, { useEffect, useState } from 'react';
import { PokemonCard } from '@/app/Componentes/PokemonCard';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [ordenAscendente, setOrdenAscendente] = useState(true);
    const [ordenDescendente, setOrdenDescendente] = useState(false);

    useEffect(() => {
        const ApiURL = "https://pokeapi.co/api/v2/pokemon/"
        let pokemonData = [];

        for(let i = 1; i <= 10; i++){
            fetch(ApiURL + i)
            .then(response => {
                if(!response.ok){
                    throw new Error(`Error al realizar la solicitud. Código de estado: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                data.weight = data.weight / 10;
                data.height = data.height / 10
                pokemonData.push(data);
                if(pokemonData.length === 10) {
                    setPokemon(pokemonData);
                }
            })
            .catch(error => {
                console.error('Ha ocurrido un error:', error);
            });
        }
    }, []); 


    function handleSort (condicion) {
        const sortedPokemon = [...pokemon].sort((a, b) => a[condicion] - b[condicion]);
        setPokemon(sortedPokemon);
    }

    function Descendente (){

    }

    return (
<div className='bg-custom-gray p-10' id='probar'>
        <h4 className='text-lg text-center text-white font-bold m-2'>Organizar por:</h4>
        <div className='flex flex-row gap-3 flex-wrap justify-center items-center h-16'>
        <button onClick={() => handleSort('id')} className='bg-lime-500 font-semibold p-2 rounded-lg'>Numero</button>
        <button onClick={() => handleSort('weight')} className='bg-blue-500 font-semibold p-2 rounded-lg'>Peso</button>
        <button onClick={() => handleSort('height')} className='bg-orange-500 p-2 font-semibold rounded-lg'>Altura</button>
        <button onClick={() => {setOrdenAscendente(false); setOrdenDescendente(true);}} className='bg-pink-500 font-semibold p-2 rounded-lg'>Descendente</button>
        <button onClick={() => {setOrdenAscendente(true); setOrdenDescendente(false);}} className='bg-yellow-400  font-semibold p-2 rounded-lg'>Ascendente</button>
        </div>

        <div className={`flex ${ordenDescendente ? 'flex-row-reverse' : 'flex-row'} overflow-x-auto gap-2 justify-start items-center mt-20 `}>
            {pokemon.map(pokemons => (
                 <PokemonCard pokemon={pokemons} />
            ))}
        </div>
        </div>
    );
}

export default PokemonList;
