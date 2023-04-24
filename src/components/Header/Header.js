import Navbar from '../Navbar/Navbar';
import './Header.css';
import logo from './../../assets/logo.png'

function Header() {
    return (
        <>
            <header class="header-container">
                <div class="logo-container">
                    <div class="img-container">
                        <img src={logo} alt="Logo, dibujo de un avión" />
                    </div>
                </div>
                <Navbar />
            </header>
        </>
    );
}

export default Header;