import './style.css'
import Logo from "../../assets/ulbra-csl.jpeg"

function Header() {
    return(
        <header>
            <div> 
                <img 
                src={Logo} 
                alt="Foto de perfil" /> 
            </div> 
        </header>
    )
}

export default Header