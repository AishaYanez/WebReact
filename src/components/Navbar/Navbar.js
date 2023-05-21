import { useState} from 'react';
import './Navbar.css';
import RSS from './img/rss.png';
import btnNav from './img/arrow.png';

function Navbar({changeNavState}) {
    const [navState, setnavState] = useState('show');

    const movNav = () => {
        setnavState(navState === 'show' ? 'hidden' : 'show');
        changeNavState();
    }

    return (
        <>
            <div className={`nav-container ${navState}`}>
                <ul className={`nav-bar ${navState}`}>
                    <li><a href="/Home">Inicio</a></li>
                    <li><a href="/Reserve">Reservar vuelo</a></li>
                    <li><a href="/Explore">Explorar</a></li>
                    <li><a href="/Contact">Contacto</a></li>
                    <li><a href="/Admin">Añadir hotel</a></li>
                    <li><a href="/News">News</a></li>
                    <li><a href="/assets/RSS/RSS.xml" target="_blank" rel="noopener noreferer"><img className='img-rss' src={RSS} alt='Imagen RSS' /></a></li>
                </ul>
                    <div className='btn-nav' onClick={movNav}><img alt="Boton para mostrar menu" src={btnNav} className={navState} /></div>
            </div>
        </>
    );
}

export default Navbar;