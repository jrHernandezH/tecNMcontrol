import React, { useRef } from 'react'
import Head from '../components/Head'

function Landyn() {
  const  containerRef = useRef();
  return (
    <>
        <div className="container" ref={containerRef}>
            <Head containerRef={containerRef}/>
        </div>
    </>
  )
}

export default Landyn