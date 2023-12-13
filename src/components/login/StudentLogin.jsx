import React from 'react'
import '../../styles/forms/loginForm.css'

//Componente login para estudiantes
function StudentLogin() {
  return (
    <>
      <main className="container-b">
          <section className='login'>
            <aside className="container-picture">
              <picture>
                <source srcSet='/assets/img/owl-removebg-preview.png'/>
                <img src="/assets/img/owl-removebg-preview.png" alt="owl" />
              </picture>
            </aside>
            <article className='container-article'>
              <div className="description-login">
              <h1>¡Bienvenido! Estudiante</h1>
              <p>Accede a tu cuenta para explorar nuestros servicios y recursos personalizados.</p>
              </div>
              <form className='form'>
                  <div className="input-group">
                      <span >Username</span>
                      <input type="text" id='username' required/>
                  </div>
                  <div className="input-group">
                    <span >Password</span>
                    <input type="password" id='password' required/>
                  </div>
                  <button className='btn-success'>Ingresar</button>
              </form>
            </article>
          </section>
      </main>
    </>
  )
}

export default StudentLogin;