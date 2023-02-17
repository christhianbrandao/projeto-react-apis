import HeaderPokedex from "../../componentes/header/headerPokedex"
import { Grid } from "@chakra-ui/react";
import { CardPokedex } from "../../componentes/cards/cardPokedex";
import { ContainerPagina } from "./stylePokedexPage";
import { Context } from "../../context/global/globalContext";
import { useContext } from "react";


export const PokedexPage = () => {
    
    const { pokemons, setPokemons, pokemonPego, setPokemonPego, pokedexPokemon } = useContext(Context)
    console.log('pesonalizado'+pokemonPego);
    


    return (
        <div>
            <ContainerPagina>
                <HeaderPokedex />
                <Grid templateColumns={"repeat(3, 1fr)"} gap={6} paddingLeft={"130px"} paddingTop={"60px"} paddingBottom={"25px"}>
                    {pokemonPego.map((pokemon) => {
                        return (
                            < CardPokedex
                                key={pokemon[0].data.id}
                                name={pokemon[0].data.name}
                                img={pokemon[0].data.sprites.front_default}
                                id={pokemon[0].data.id}
                                type={pokemon[0].data.types[0].type.name}

                            />
                        )
                    })}
                </Grid>
            </ContainerPagina>

        </div>
    )
}