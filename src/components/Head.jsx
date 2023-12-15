import React from 'react'
import '../styles/header/header.css';
import { NavLink } from 'react-router-dom';

function Head() {

  return (
    <>
        <header className='header'>
            <NavLink to="/"><h1 className='title-page'>TecNMControl</h1></NavLink>
            <nav className='nav'>
                <div className="menu">
                    <label htmlFor="toggle">Menú</label>
                    <input type="checkbox" id='toggle'/>
                    <div className="routes">
                        <NavLink to="/" id='Home'>Home</NavLink>
                        <NavLink to="/About" id='about'>About</NavLink>
                        <NavLink to="/Contact" id='contact'>Contact</NavLink>
                    </div>
                </div>
                <div className='container-login' id='container-login'>
                    <NavLink to="/login/student" id='students'>Estudiantes</NavLink>
                    <NavLink to="/login/teacher" id='teacher'>Profesores</NavLink>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Head