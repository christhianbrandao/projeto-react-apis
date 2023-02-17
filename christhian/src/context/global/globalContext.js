import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Context = createContext()


function Provider({ children }) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i < 30; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res))

        // axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
        //     .then((res) => setPokemons(res.data.result))
        //     .catch((err) => console.log(err))
    }

    const [pokemonPego, setPokemonPego] = useState([])

    // const pokedexPokemon = ( pokemon ) => {
    //     const copy = [...pokemonPego]
    //     const verif = copy.find(( poke )=> poke.data.id === pokemon.data.id )
    //     console.log(verif);
    //     if(!verif){
    //         copy.push({...pokemon.data})
    //     }else{
    //         alert('deu certo')
    //     }
    //     setPokemonPego(copy)
    //     console.log(pokemonPego);
    // }
    const addToPokedex =(pokemon)=>{
        const pokemonFiltrar = pokemons.filter(function(item){
            return item.name !== pokemon.name
        })
        setPokemons(pokemonFiltrar)
        pokemonPego.push(pokemon)
        
        console.log(pokemons);
    }



    return (
        <Context.Provider value={{ pokemons, setPokemons, pokemonPego, setPokemonPego, addToPokedex }}>
            {children}
        </Context.Provider>
    )
}
export default Provider;
