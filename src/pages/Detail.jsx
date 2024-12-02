import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useSelector } from "react-redux";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div
      className="flex flex-col justify-center items-center 
    border border-[gray] rounded-[15px] p-[25px]"
    >
      <div className="text-[30px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <img className="w-[150px]" src={pokemon.front} />
    </div>
  );
}