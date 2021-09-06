import React from 'react';
import '../css/ThirthNavbar.css'


export const ThirthNavbar = () =>{
    return(
        <React.Fragment>
            <div className='thirth-navbar-container'>
                <button className='thirth-navbar-button'>
                    <p className='thirth-navbar-text'><strong>Electrónicos</strong></p>
                </button>
                <button className='thirth-navbar-button'>
                    <p className='thirth-navbar-text'>Los Más Vendidos</p>
                </button>
                <button className='thirth-navbar-button'>
                    <p className='thirth-navbar-text'>Televisión y Video</p>
                </button>
                <button className='thirth-navbar-button'>
                    <p className='thirth-navbar-text'>Cómputo y Tabletas</p>
                </button>
                <button className='thirth-navbar-button'>
                    <p className='thirth-navbar-text'>Audio y Equipos de Sonido</p>
                </button>
            </div>
        </React.Fragment>
    )
}