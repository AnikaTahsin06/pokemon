// @ts-nocheck
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import Cards from "./Components/Cards";
import logo from "./images/Logo.png";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }`;

  const gqlVariables = {
    limit: 10,
    offset: 1,
  };

  fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => setPokemons(res.data.pokemons.results));

  return (
    <div className="background bg-cover grid h-screen place-items-center">
      <Image src={logo} width={200} height={200} />
      <Cards pokemons={pokemons} />
    </div>
  );
}
