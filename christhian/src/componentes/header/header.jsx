import { ButtonPokedex, Head, Logo } from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/cordinator";

const Header = () => { 

    const navigate = useNavigate();

    return (

        <>
            <Head>
                <Logo />
                <ButtonPokedex onClick={()=> goToPokedex(navigate)}>
                    Pokedex
                </ButtonPokedex>
            </Head>
        </>
    )

}
export default Header;