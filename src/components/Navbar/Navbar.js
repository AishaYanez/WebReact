import './Navbar.css';
import RSS from './img/rss.png'

function Navbar() {
    return (
        <>
            <div className="nav-container">
                <ul className="nav-bar">
                    <li><a href="/Home">Inicio</a></li>
                    <li><a href="/Reserve">Reservar vuelo</a></li>
                    <li><a href="/Explore">Explorar</a></li>
                    <li><a href="/Contact">Contacto</a></li>
                    <li><a href="/Admin">Añadir hotel</a></li>
                    <a href="/assets/RSS/RSS.xml" target="_blank" rel="noopener noreferer"><img className='img-rss' src={RSS} ></img></a>
                </ul>
            </div>
        </>
    );
}

export default Navbar;