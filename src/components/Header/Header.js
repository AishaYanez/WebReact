import Navbar from '../Navbar/Navbar';
import './Header.css';
import logo from './img/logo.png'

function Header() {
    return (
        <>
            <header className="header-container">
                <div className="logo-container">
                    <div className="img-container">
                        <img src={logo} alt="Logo, dibujo de un avión" />
                    </div>
                </div>
                <Navbar />
            </header>
        </>
    );
}

export default Header;