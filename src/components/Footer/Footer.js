import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="copyright-container">
                    <p>© 2023 Travels Todos los derechos reservados</p>
                </div>
                <div className="politics-container">
                    <p><a href='/'>Política de Privacidad y Cookies</a> | <a href='/'>Condiciones de Venta</a></p>
                </div>
                <div className="icons-container">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-twitch"></ion-icon>
                </div>
            </footer>
        </>
    );
}

export default Footer;

