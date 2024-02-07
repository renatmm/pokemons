import { FC } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { IPokemon } from "../../interfaces/interfaces";
import { Flex } from "antd";


interface PokemonsListProps {
    pokemons: IPokemon[];
    likePokemon: (id: number) => (void);
    deletePokemon: (id: number) => (void);
}

const PokemonsList: FC<PokemonsListProps> = ({pokemons, likePokemon, deletePokemon}) => {
    return (
        <Flex gap={1} wrap="wrap">
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} likePokemon={likePokemon} deletePokemon={deletePokemon} pokemon={pokemon}/>
            ))}
        </Flex>
    );
}
 
export default PokemonsList;
