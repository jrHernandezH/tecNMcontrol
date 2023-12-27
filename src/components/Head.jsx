import React, { useRef } from 'react'
import '../styles/header/header.css'
import 'boxicons/css/boxicons.min.css'
import { NavLink } from 'react-router-dom';


function Head({containerRef}) {
  //Referencias para no ocupar el document.getByElemnt.ID en cambio react nos proporciona lo que es useRef
  const sidebarRef =  useRef();
  const toggleRef = useRef();
  const searchRef = useRef();
  const modeRef = useRef();
  const modeTexRef = useRef(); 
  
  //Funciones que ocupa el menu
  const modeSwitch =()=>{
    containerRef.current.classList.toggle('dark')
  }
  const toggle=()=>{
    sidebarRef.current.classList.toggle('close')  
  }
  return (
    <>
      <nav className="sidebar" ref={sidebarRef}>
        <header>
          <div className="image-text">
            

            <div className="text header-text">
              <span className="name">TecNMControl</span>
              <span className="profession">Dev-Bobby</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle" ref={toggleRef} onClick={toggle}></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" ref={searchRef}>
              <i className="bx bx-search icon"></i>
              <input type="search" placeholder="search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <NavLink to="/">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Home</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  <i className="bx bx-info-circle icon"></i>
                  <span className="text nav-text">About</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  <i className="bx bx-envelope icon"></i>
                  <span className="text nav-text">Contact</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  <i className="bx bx-briefcase icon"></i>
                  <span className="text nav-text">Carrers</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  <i className="bx bx-book icon"></i>
                  <span className="text nav-text">Master's</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  <i className="bx bx-rocket icon"></i>
                  <span className="text nav-text">Specialization</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <NavLink to="/login/student">
                <i className="bx bx-log-in icon"></i>
                <span className="text nav-text">Loggin</span>
              </NavLink>
            </li>
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              
              <span className="mode-text text" ref={modeTexRef}>Dark Mode</span>

              <div className="toggle-switch" ref={modeRef} onClick={modeSwitch}>
                <span className="switch" ></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Head