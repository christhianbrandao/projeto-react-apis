import { ButtonPokedex, Head, Logo } from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/cordinator";

const HeaderPokedex = () => { 

    const navigate = useNavigate();

    return (

        <>
            <Head>
                <Logo />
                <ButtonPokedex onClick={()=> goToHomePage(navigate)}>
                    Todos pokemons
                </ButtonPokedex>
            </Head>
        </>
    )

}
export default HeaderPokedex;