import Head from "next/head";
import Footerzin from "./footer";
import NavBar from "./navbar";






export default function Layout({children}){
    return(
        <>
        <Head>
            <link rel="ShortcutIcon" href="../public/images/pokeball.png"/>
            <title>Pokedex</title>
        </Head>
            <NavBar/>
            <main className="main_container">{children}</main>
            <Footerzin/>
        </>
    )
}