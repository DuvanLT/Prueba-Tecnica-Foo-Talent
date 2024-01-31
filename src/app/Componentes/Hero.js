import Link from "next/link"
import Image from "next/image"
import ImagenHero from '../../../public/Images/capture_illu_bottom.png'
export default function Hero() {
    return(
        <>
        <section className="hero-container text-black bg-white  flex p-2 pt-20 md:pt-0 flex-col md:flex-row justify-center items-center min-h-[640px] gap-10">
            <div className="hero-text">
                <h1 className="text-3xl text-blue-500 m-4 max-w-xl  font-bold">EXPLORA LOS 10 PRIMEROS POKEMONES DE LA POKEDEX</h1>
                <p className="m-4 max-w-xl text-balance">Descubre de que tipo es tu pokemon inicial favorito, todo el listado de sus hablidades, y sus atributos</p>
                <button className="bg-zinc-200 p-2 rounded-md m-4 font-bold border-2 border-black hover:bg-blue-500 hover:border-blue-500 hover:text-white">PROBAR APP</button>
            </div>
        <Image
        width={600}
        height={600}
        src={ImagenHero}
        alt="hero-image"
        className=" object-cover p-4"
        ></Image>
        </section>
      </>
    )
}