import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";

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
    <div className="bg-red-800 grid h-screen place-items-center">
      <h1 className="text-gray-100 text-6xl">Pokemon</h1>
      <div className="cards">
        {pokemons.map((pokemon: any) => {
          return (
            <div className="max-w-sm rounded overflow-hidden  card ">
              <img src={pokemon.image} alt="" />
              <h1>{pokemon.name}</h1>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
