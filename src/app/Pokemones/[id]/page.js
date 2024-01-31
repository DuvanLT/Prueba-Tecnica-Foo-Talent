'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const PokemonPage = () => {
    const params = useParams();
    let id;
    if (params) {
      id = params.id;
    }

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    if (!pokemon) return <div>Cargando...</div>;

    return (
        <div>
            <Link
            href="/"
            >
            <span>Regresar</span>
            </Link>
            <h2>{pokemon.name}</h2>
            <p>Experiencia Base: {pokemon.base_experience}</p>
            <p>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p>Tipos: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <img src={pokemon.sprites.front_default} alt="Imagen frontal del Pokémon" />
            <img src={pokemon.sprites.back_default} alt="Imagen trasera del Pokémon" />
            <p>Movimientos: {pokemon.moves.map(move => move.move.name).join(', ')}</p>
        </div>
    );
};

export default PokemonPage;
