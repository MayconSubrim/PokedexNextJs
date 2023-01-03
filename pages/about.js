import Image from "next/image";
import styles from "../styles/About.module.css"

export default function About() {
    return (
      <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>PokeDext é um App construído em Next.js para consultar Pokémons.</p>
        <Image
          src="/images/rayquaza.png"
          alt="Charizard"
          width="300"
          height="300"
        />
      </div>
    )
  }