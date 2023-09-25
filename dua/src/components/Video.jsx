import React from 'react'

export default function() {
    return (
        <div className='video'>
            <div className='overlay'>
                <div className='contenedor contenido-video'>
                    <h2>Pop & EDM Festival</h2>
                    <p>Septiembre 2023, San Luis-Argentina</p>
                </div>
            </div>
            <video autoPlay muted loop>
                <source src='../video/Mi video-1.mp4' type='video/mp4' />
            </video>
        </div>
    )
}
