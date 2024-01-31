export default function Footer() {
    return(
        <>
        <footer className="bg-blue-500 h-40 flex items-start justify-center text-white flex-col pl-20">
            <p>
                Esta pagina fue realizada para la entrega de la prueba tecnica para la compañia Foo Talent Group por Duvan Mancilla
            </p>
            <ul className="font-bold mt-5" id="redes">
               <a href="https://www.linkedin.com/in/duvan-mancilla/" target="Blank_"><li>Linkedin</li> </a> 
               <a href="https://duvandev.netlify.app/" target="Blank_"><li>Portafolio web</li> </a> 
               <a href="https://github.com/DuvanLT" target="Blank_"><li>Github</li></a> 
            </ul>
        </footer>
        </>
    )
}