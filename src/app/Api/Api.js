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
<>
        <h4>Organizar por:</h4>
        <div className='flex flex-row gap-3'>
        <button onClick={() => handleSort('id')}>Numero</button>
        <button onClick={() => handleSort('weight')}>Peso</button>
        <button onClick={() => handleSort('height')}>Altura</button>
        <button onClick={() => {setOrdenAscendente(false); setOrdenDescendente(true);}}>Descendente</button>
        <button onClick={() => {setOrdenAscendente(true); setOrdenDescendente(false);}}>Ascendente(por defecto)</button>
        </div>

        <div className={`flex ${ordenDescendente ? 'flex-row-reverse' : 'flex-row'} overflow-x-auto gap-2 justify-center items-center`}>
            {pokemon.map(pokemons => (
                 <PokemonCard pokemon={pokemons} />
            ))}
        </div>
        </>
    );
}

export default PokemonList;
