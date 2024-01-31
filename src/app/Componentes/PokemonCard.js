import Link from 'next/link';
export const PokemonCard = ({ pokemon }) => {
    return (
        <Link href={`/Pokemones/${pokemon.id}`}>
        <div key={pokemon.id} className='m-2 min-w-40 flex items-center justify-center flex-col bg-white p-2 rounded-lg'> 
        <div className='flex flex-row-reverse gap-4'>
            <h2 className='font-semibold text-rose-500'>{pokemon.name}</h2>
            <p>#{pokemon.id}</p>
        </div>
        <picture>
            <img 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            />
        </picture>
            <p className='font-medium'>Peso: {pokemon.weight} kg</p>
            <p className='font-medium'>Altura: {pokemon.height} m</p>
        </div>
        </Link>
    );
}

