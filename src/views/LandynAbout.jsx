import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Footer'
import '../styles/home/about.css'
function LandynAbout() {
  return (
   <>
        <div className="container">
            <Head/>
            <main>
              <article className="about-us">
                <h2>Sobre nosotros</h2>
                <p>Descubre la fascinante historia que dio origen al Instituto Tecnológico de Orizaba en 1952. Desde sus primeros días como parte del prestigioso Instituto Politécnico Nacional hasta su evolución en 1958 como miembro destacado de la Dirección General de Institutos Tecnológicos Foráneos, esta institución ha forjado una trayectoria única. Hoy en día, es un orgulloso integrante de la Red de Tecnológicos Nacionales de México. </p>
                <p>
                Sumérgete en un entorno educativo donde la innovación y la excelencia científica y tecnológica son la base, como lo demuestra su lema inspirador: "Ciencia-Técnica-Cultura". ¡Prepárate para explorar un mundo de posibilidades en el Instituto Tecnológico de Orizaba!
                </p>
              </article>
              <div className="container-picture">
                <picture>
                  <img src="/assets/img/bgAbout.jpg" alt="Inauguracion" />
                </picture>
              </div>
              <article className="container-frase">
                <div className='texto-container'>
                  <p className='comillas derecha'>"</p>
                  <p className='texto-frase'>En el TecNM, somos la excelencia educativa personificada. Forjamos líderes del futuro, donde la innovación y el éxito convergen. ¡Aquí, la grandeza es nuestro sello distintivo!</p>
                  <p className='comillas izquierda'>"</p>
                </div>
                <div className='container-picture-frase'>
                  <picture>
                    <img src="/assets/img/graduados.jpg" alt="graduados" />
                  </picture>
                </div>
              </article>
            </main>
            <Footer/>
        </div>
   </>
  )
}

export default LandynAbout