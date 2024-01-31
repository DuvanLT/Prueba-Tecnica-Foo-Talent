import React from 'react';

// Definición del componente Footer
export default function Footer() {
    return (
        <>
            {/* Estructura del pie de página */}
            <footer className="bg-blue-500 flex items-start justify-center text-white flex-col p-10 pl-20">
                {/* Mensaje de la página */}
                <p>
                    Esta página fue realizada para la entrega de la prueba técnica para la compañía Foo Talent Group por Duvan Mancilla
                </p>
                {/* Lista de enlaces a redes sociales y portafolio */}
                <ul className="font-bold mt-5" id="redes">
                    <a href="https://www.linkedin.com/in/duvan-mancilla/" target="blank_">
                        <li>Linkedin</li>
                    </a>
                    <a href="https://duvandev.netlify.app/" target="blank_">
                        <li>Portafolio web</li>
                    </a>
                    <a href="https://github.com/DuvanLT" target="blank_">
                        <li>Github</li>
                    </a>
                </ul>
            </footer>
        </>
    );
}
