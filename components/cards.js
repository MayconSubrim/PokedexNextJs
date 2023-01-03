import Image from "next/image";
import Link from "next/link";



export default function Card( { pokemon } ){
    return(
        <>
        <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="120" height="120" alt={pokemon.name}/>
        <h3>{pokemon.name}</h3>
        <Link href={`/pokemon/${pokemon.id}`}><button>Detalhes</button></Link>
        </>
    )
}