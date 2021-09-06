import React from 'react';
import '../css/SecondNavbar.css'

/*Icons*/
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';


export const SecondNavbar = () => {
    return (
        <React.Fragment>
            <div className='second-navbar-container'>
                <button className='burger-menu-button'>
                    <MenuOutlinedIcon className='burger-icon'/>
                    <p className='second-navbar-text'>Todo</p>
                </button>
                <button class='second-second-navbar-button'>
                    <p className='second-navbar-text'>Tarjeta de regalo</p>
                </button>
                <button className='thirth-second-navbar-button'>
                    <p className='second-navbar-text'>Prime</p>
                </button>
                <button className='fourth-second-navbar-button'>
                    <p className='second-navbar-text'>Los Más Vendidos</p>
                </button>
                <button className='fith-second-navbar-button'>
                    <p className='second-navbar-text'>AmazonBasics</p>
                </button>
                <button className='six-second-navbar-button'>
                    <p className='second-navbar-text'>Cómputo y Tabletas</p>
                </button>
                <button className='seven-second-navbar-button'>
                    <p className='second-navbar-text'>Los Más Regalados</p>
                </button>
            </div>
        </React.Fragment>
    )
}