import React from 'react'
import '../../styles/video/video.css'

function Video() {
  return (
    <>
        <video loop muted autoPlay>
            <source src='/assets/videos/bienvenidos.mp4' type='video/mp4'/>
        </video>
    </>
  )
}

export default Video