import Image from "next/image";
import styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async() => {
    const max_pokemon = 250;
    const api = "https://pokeapi.co/api/v2/pokemon/";
  
    const res = await fetch(`${api}/?limit=${max_pokemon}`);
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return{
            params : { pokemonId: (index + 1).toString() },
        }
    })

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context) => {

    const id = context.params.pokemonId

    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props : { pokemon: data },
    }
}

export default function Pokemon( { pokemon } ){
    return(
        <main className={styles.pokemon_container}>
        <div>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="200" height="200" alt={pokemon.name}/>
        </div>
        <section className={styles.container_number}>
            <h1>Numero:</h1>
            <p>#{pokemon.id}</p>
        </section>
        <section >
            <h1 className={styles.container_type}>Tipos:</h1>
              <div className={styles.types_container}>
                {pokemon.types.map((item, index) =>(
                    <span className={`${styles.type} ${styles['type_' + item.type.name]}`} key={index}> {item.type.name} </span>
                ))}
              </div>
        </section>
        <section className={styles.data_container}>
            <div className={styles.data_height}>
                <h3>altura:</h3>
                <p>{pokemon.height * 10} CM</p>
            </div>
            <div className={styles.data_weight}>
                <h3>peso:</h3>
                <p>{pokemon.weight /10} KG</p>
            </div>
        </section>
        </main>
    )
}