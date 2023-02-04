// @ts-nocheck
const Cards = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-5 gap-x-20 gap-y-10">
      {pokemons.map((pokemon) => {
        return (
          <div className="max-w-sm overflow-hidden rounded p-4 card">
            <div className="m-1 rounded bg-slate-200 hover:bg-white">
              <p>#010</p>
              <img src={pokemon.image} className="place-items-center" alt="" />
            </div>
            <div>
              <h1>{pokemon.name}</h1>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
