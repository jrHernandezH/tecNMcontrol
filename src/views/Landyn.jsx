import React from 'react'
import Head from '../components/Head'
import Home from '../components/Home'
import Data from '../components/Data'
import Video from '../components/videos/Video'
import Footer from '../components/Footer'

function Landyn() {
  return (
    <>
        <div className="container">
            <Head/>
            <Home/>
            <Data/>
            <Video/>
            <Footer/>
        </div>
    </>
  )
}

export default Landyn