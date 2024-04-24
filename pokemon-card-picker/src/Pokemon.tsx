import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
}

export function Pokemon() {
  const [details, setDetails] = useState<PokemonDetails>();
  const { id } = useParams();

  const fetchCard = async (id: string | undefined) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setDetails(data as PokemonDetails);
  };

  useEffect(() => {
    fetchCard(id);
  }, [id]);

  return (
    <>
      <h1>{details && details.name}</h1>
      {details && (
        <img src={details.sprites.front_default} alt={`${details.name}`} />
      )}
    </>
  );
}
