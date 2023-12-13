import React from 'react'
import '../styles/footer/footer.css'
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer>
        <div className="container__footer">
            <div className="box__footer ">
                <div className="logo">
                    <picture>
                        <img src="/assets/img/LogoTecNM.svg" alt="TecNM" />
                    </picture>
                </div>
                <div className="terms">
                    <p>En el año de 1957 nació el Instituto Tecnológico de Orizaba, ante las necesidades propias del desarrollo industrial, que en ese entonces iniciaba su despegue en la zona centro del Estado de Veracruz.</p>
                </div>
            </div>
            <div className="box__footer">
                <h2>Carreras</h2>
                <NavLink>Ing. Sistemas Computacionales</NavLink>
                <NavLink>Ing. Informatica</NavLink>
                <NavLink>Ing. Quimica</NavLink>
                <NavLink>Ing. Industrial</NavLink>
                <NavLink>Ing. Empresarial</NavLink>
                <NavLink>Ing. Mecanica</NavLink>
            </div>
            <div className="box__footer">
                <h2>Gobierno de México</h2>
                <NavLink to="https://www.gob.mx/sep">Secretaria de Educación Publica</NavLink>
                <NavLink to="https://www.gob.mx/publicaciones">Publicaciones Oficiales</NavLink>
                <NavLink to="http://www.ordenjuridico.gob.mx">Marco Juridico</NavLink>
                <NavLink to="https://consultapublicamx.plataformadetransparencia.org.mx/">Plataforma Nacional de Transparencia</NavLink>
            </div>
            <div className="box__footer social">
                <h2>Redes Sociales</h2>
                <NavLink to="https://www.facebook.com/tecorizaba/"><FaFacebook /> Facebook</NavLink>
                <NavLink to="https://www.linkedin.com/in/hernández-flores-hugo-062a25245"><FaLinkedin/> Linkedin</NavLink>
                <NavLink to="https://www.tiktok.com/@expresatec2020"><FaTiktok/> Tiktok</NavLink>
            </div>
        </div>
        <div className="box__copyright">
            <hr/>
            <p>Tecnológico Nacional de México - Derechos reservados © 2023 <b>DevBobby</b></p>
        </div>
</footer>
    </>
  )
}

export default Footer