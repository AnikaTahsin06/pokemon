// @ts-nocheck
import Image from "next/image";
import {
  Chau_Philomene_One,
  IM_Fell_Double_Pica,
  Inter,
  League_Gothic,
} from "@next/font/google";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import logo from "./images/Logo.png";
import left from "./images/Left.png";
import { getAllPokemon, getPokemon } from "@/services/services";
import { homedir } from "os";
import { LanguageVariant } from "typescript";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon();
      await loadingPokemon(response?.data?.pokemons?.results);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let pokemonData = await Promise.all(
      data?.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    console.log(pokemonData);
    setPokemons(pokemonData);
  };

  return (
    <div>
      <div className="background bg-cover grid h-screen place-items-center">
        <Image src={logo} width={200} height={200} />
        <br />
        <br />
        <Cards pokemons={pokemons} />
        <a href={1}>next</a>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-12 bg-cover   h-screen   bg-white">
        <div className="col-auto background bg-cover">
          <Image src={left} className="h-screen" />
        </div>
        <div className="col-span-10  bg-white">
          <h1>Anika</h1>
          <h1>Anika</h1>
          <h1>Anika</h1>
          <h1>Anika</h1>
          <h1>Anika</h1>
          <h1>Anika</h1>
        </div>
        <div className="col-auto background bg-cover">
          <Image src={left} className="h-screen" />
        </div>
      </div>
    </div>
  );
}
