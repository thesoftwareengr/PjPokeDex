export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id} >
          <h2>{p}</h2>
          {p.sprites && <img src={p.sprites.front_default} alt={p.name} />}
          <p>Height: {p.height}</p>
          <p>Weight: {p.weight}</p>
        </div>
      ))}
    </div>
  );
}