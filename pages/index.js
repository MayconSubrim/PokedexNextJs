import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Card from '../components/cards';

export async function getStaticProps() {
  const max_pokemon = 250;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${max_pokemon}`);
  const data = await res.json();

  data.results.forEach((item, index) =>{
    item.id = index + 1 
  })

  return{
    props: {
      pokemons: data.results,
    },
}
}

export default function Home( {pokemons} ) {
  return (
    <>
    <section className={styles.container_home}>
      <h1>Poke<span className={styles.redtext} >Dex</span></h1>
      <Image src="/images/pokeball.png" width="30" height="30" alt='poquebola'/>
      </section>

      <div className={styles.pokemons_containers}>
        <ul>
          {pokemons.map((pokemon =>(
            <div className={styles.pokemons}><Card key={pokemon.id} pokemon={pokemon}/></div>
          )))}
        </ul>
      </div>
    </>
  )
}
