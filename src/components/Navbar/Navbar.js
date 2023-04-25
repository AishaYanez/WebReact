import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div class="nav-container">
                <ul class="nav-bar">
                    <li><a href="/Home">Inicio</a></li>
                    <li><a href="/">Reservar vuelo</a></li>
                    <li><a href="/">Explorar</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;