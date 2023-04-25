import './Footer.css';

function Footer() {
    return (
        <>
            <footer class="footer-container">
                <div class="copyright-container">
                    <p>© 2023 Travels Todos los derechos reservados</p>
                </div>
                <div class="politics-container">
                    <p><a href='/'>Política de Privacidad y Cookies</a> | <a href='/'>Condiciones de Venta</a></p>
                </div>
                <div class="icons-container">
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

