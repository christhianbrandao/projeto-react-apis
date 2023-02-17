export const goToHomePage = (navigate)=>{
    navigate("/");
};

export const goToPokedex = (navigate)=>{
    navigate("/pokedex");
};

export const goToPokemonDetails = (navigate,name)=>{
    navigate(`/pokemon/${name}`);
};