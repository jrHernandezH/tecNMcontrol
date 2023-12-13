import React from 'react'
import '../styles/home/home.css'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
      <>
        <div className='container-Home'>
            <div className="dark-overlay"></div>
            <picture>
                <source srcSet="/assets/img/ito.webp" type="image/webp"/>
                <img src="/assets/img/ito.jpg" alt="mural"/>
            </picture>
            <div>
                <div className="title-apart">
                    <h2>Instituto Tecnologico de Mexico Campus Orizaba</h2>
                    <p>La mejor institución para desarrollar tus habilidades como ingeniero de las diferentes carrera que nuestra cede oferta.</p>
                </div>
            </div>
            <div className="information">
              <div className="professors box-rol">
                <span>Acceso a Docentes</span>
                <NavLink to="/login/teacher">Ingresar</NavLink>
              </div>
              <div className="line-divider"></div>
              <div className="studens box-rol">
                <span>Acceso a Estudiantes</span>
                <NavLink to="/login/student">Ingresar</NavLink>
              </div>              
            </div>
        </div>
      </>
    )
  }
  

export default Home