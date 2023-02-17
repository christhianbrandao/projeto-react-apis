import { ButtonDetails, CatchButton, ContainerCard, Pokeball, PokemonImg, PokemonName, PokemonNumber, TypeImg, TypesContainer } from "./styledCards";
import pokeball from '../../img/pokeball.png';
import { caseType } from '../../cases/caseType'
import { getColors } from "../../cases/caseColor";
import { useContext } from "react";
import { Context } from "../../context/global/globalContext";

const Card = (props) => {
    const { name, img, id, type,  } = props
    const { pokemons, pokedexPokemon, pokemonPego, addToPokedex } = useContext( Context )
    // console.log(pokemonPego);

    // onClick={()=>goToPokemonDetails(navigate,pokemonName)}
    // 
    return (
        <ContainerCard color={getColors(type)}>
            <PokemonNumber>#{id}</PokemonNumber>
            <PokemonName>{(name)}</PokemonName>
            <TypesContainer>
                <TypeImg src={caseType(type)} />
            </TypesContainer>
            <ButtonDetails >Detalhes</ButtonDetails>
            <CatchButton onClick={()=> addToPokedex(pokemons)}>Capturar!</CatchButton>
            <PokemonImg src={img} />
            <Pokeball src={pokeball} />
        </ContainerCard>
    )
}

export default Card;