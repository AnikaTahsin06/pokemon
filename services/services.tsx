// @ts-nocheck

export async function getAllPokemon() {
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

  return new Promise((resolve, reject) => {
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
      .then((res) => {
        resolve(res);
      });
  });
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}
