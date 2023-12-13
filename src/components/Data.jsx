import React from 'react'
import '../styles/data/data.css'
function Data() {
  return (
    <>
        <div className='container-data'>
            <div className="box-data">
                <div className="rates academicos">
                    <span className='numberRate'>30+</span>
                    <p className='description'>Programas académicos</p>
                </div>
            </div>
            <div className="box-data">
                <div className="rates laboratorios">
                    <span>20+</span>
                    <p>Laboratorios</p>
                </div>
            </div>
            <div className="box-data">
                <div className="rates colaboracion">
                    <span>50+</span>
                    <p>Colaboración con empresas</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Data