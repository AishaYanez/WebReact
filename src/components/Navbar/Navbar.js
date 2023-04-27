import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="nav-container">
                <ul className="nav-bar">
                    <li><a href="/Home">Inicio</a></li>
                    <li><a href="/Reserve">Reservar vuelo</a></li>
                    <li><a href="/Explore">Explorar</a></li>
                    <li><a href="/Contact">Contacto</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;