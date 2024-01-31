import Link from 'next/link';
export const PokemonCard = ({ pokemon }) => {
    return (
        <Link href={`/Pokemones/${pokemon.id}`}>
        <div key={pokemon.id}> 
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
            <img 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            />
            <p>Peso: {pokemon.weight} kg</p>
            <p>Altura: {pokemon.height} m</p>
        </div>
        </Link>
    );
}

