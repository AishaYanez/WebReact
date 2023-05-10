import './Contact.css'

function Contact() {
    return (
        <>
            <div className='contact-container'>
            <h1>Contacto</h1>
            <p>Gracias por su interés en Travels. Si tiene alguna pregunta, comentario o inquietud, no dude en ponerse en contacto con nosotros. A continuación encontrará nuestras información de contacto:</p>

            <h2>Teléfono</h2>
            <p>Si necesita asistencia inmediata, por favor llámenos al siguiente número:</p>
            <p><a href="tel:+123456789">+123456789</a></p>

            <h2>Correo electrónico</h2>
            <p>También puede enviarnos un correo electrónico a la siguiente dirección:</p>
            <p><a href="mailto:info@travels.com">info@travels.com</a></p>

            <h2>Redes sociales</h2>
            <p>Síganos en nuestras redes sociales para mantenerse al día con nuestras últimas ofertas y promociones:</p>
            <ul className='social-networks-container'>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://twitter.com">Twitter</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>

            <h2>Dirección</h2>
            <p>Si prefiere comunicarse en persona, puede visitarnos en nuestra oficina ubicada en:</p>
            <p>Calle Falsa 123, Ciudad Ficticia, País Imaginario</p>

            <h2>Comentarios</h2>
            <p>Si desea enviarnos un comentario o sugerencia, por favor complete el siguiente formulario:</p>
            <form action="enviar_comentario.php" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required /><br />

                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required /><br />

                <label for="comentario">Comentario:</label><br />
                <textarea id="comentario" name="comentario" rows="5" cols="40" required></textarea><br />

                <input type="submit" value="Enviar comentario" />
            </form>

            <p>Gracias de nuevo por elegir Travels. Esperamos poder ayudarle pronto.</p>
            </div>
        </>
    );
}

export default Contact;