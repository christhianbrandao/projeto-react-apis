import Header from "../../componentes/header/header"
import Card from "../../componentes/cards/cards"
import { useContext, useEffect, useState } from "react"
import { ContainerPagina } from "./styledHomePage"
import { Grid } from "@chakra-ui/react";
import { Context } from "../../context/global/globalContext"

export const HomePage = () => {
    const { pokemons, setPokemons, pokemonPego, setPokemonPego, pokedexPokemon } = useContext(Context)
    

    

    return (

        <ContainerPagina>
            <Header />
            <Grid templateColumns={"repeat(3, 1fr)"} gap={6} paddingLeft={"130px"} paddingTop={"60px"} paddingBottom={"25px"}>
                {pokemons.map((pokemon) => {
                    return (
                        < Card
                            key={pokemon.data.id}
                            name={pokemon.data.name}
                            img={pokemon.data.sprites.front_default}
                            id={pokemon.data.id}
                            type={pokemon.data.types[0].type.name}
                            pokedexPokemon={pokedexPokemon}
                            pokemonPego={pokemonPego}

                        />
                    )
                })}
            </Grid>
        </ContainerPagina>

    )
}