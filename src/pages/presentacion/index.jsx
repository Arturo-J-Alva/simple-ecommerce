import React from 'react'
import Layout from '../../g_components/layout'
import Link from 'next/link'

const Presentacion = () => {
    return (
        <Layout title="Presentación">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold underline text-2xl my-2">PRUEBA TÉCNICA: Ecommerce</h1>
                <h2 className="font-bold text-xl mb-2">Desarrollador: Arturo J. Alva</h2>
                <h3 className="font-bold">Tecnologías principales usadas:</h3>
                <ul className="text-center">
                    <li>- ReactJS</li>
                    <li>- NextJS</li>
                    <li>- TailwindCSS</li>
                    <li>- Google Fonts</li>
                    <li>- Api: <a className="text-blue-600" href="https://corpoalva.hortalizasgaia-pe.com/consulta/general" target="_blank" rel="nofollow" >https://corpoalva.hortalizasgaia-pe.com/consulta/general</a> </li>
                </ul>

                <Link href="/simple-ecommerce">
                    <a className="text-center mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Ir al Ecommerce Simple
                    </a>
                </Link>

                <div>
                    <h3 className="font-bold">Comentarios</h3>
                    <ul>
                        <li>- Utilizo NextJS para aprovechar los beneficios de SSR(server side rendering), y gracias a eso no necesito un loader de carga y la transición entre vistas es mucho más fluido.</li>
                        <li>- La api (rest) que uso fue creada por mi, es parte de un proyecto (actualmente en stand-by), en donde uso Node, Express, TS y subido en EC2-AWS, y en donde la data lo administro en un cms headless básico también creado por mí, donde se observa en la siguiente imagen: </li>
                    </ul>
                    <div className="flex justify-center items-center bg-white sm:w-1/2 w-full mx-auto mt-2">
                        <img src="/cms-headless.jpg" alt="imagen cms headless" className="h-full" />
                    </div>
                </div>

                <Link href="/simple-ecommerce">
                    <a className="text-center my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Ir al Ecommerce Simple
                    </a>
                </Link>

            </div>
        </Layout>
    )
}

export default Presentacion
