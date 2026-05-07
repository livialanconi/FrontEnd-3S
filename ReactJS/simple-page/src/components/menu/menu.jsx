import Cardperfil from "../cardperfil/cardperfil";
import "./menu.css";


function Menu() {
    return (
        <nav className="menu">
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem Somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--sucess">Entrar</a>
            <a href="#" className="menu__item menu__item--button-default">Cadastrar</a>

            <Cardperfil/>
        </nav>
    );
}


export default Menu;