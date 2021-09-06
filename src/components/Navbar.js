import React from 'react';
import '../css/Navbar.css'

/*Images*/
import logoAmazonas from '../images/logo-amazon.png'

/*Icons*/
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img className= 'logo' src={logoAmazonas} alt='Logo Amazonas'/>
                <div className='address-div'>
                    <p className='hi-address-text'>Hola</p>
                    <div className='input-container'>
                        <LocationOnOutlinedIcon className='navbar-icon'></LocationOnOutlinedIcon>
                        <input type='text' className='navbar-address-searchbar' placeholder='Elige tu dirección'/>
                    </div>
                </div>
                <div className='product-searchbar-container'>
                    <select className='product-dropdown' name="select-product">
                        <option className="product-dropdown-option" value="Todos los departamentos" selected>Todos los departamentos</option>
                        <option className="product-dropdown-option" value="value1">Value 1</option>
                        <option className="product-dropdown-option" value="value2">Value 2</option>
                        <option className="product-dropdown-option" value="value3">Value 3</option>
                    </select>
                    <input type='text' className='product-searchbar' placeholder='Busca tu producto'/>
                    <div className='icon-searchbar-container'>
                        <SearchRoundedIcon className='icon-searchbar'></SearchRoundedIcon>
                    </div>
                </div>
                <div className='account-container'>
                    <p className='account-text'>Hola, identificate</p>
                    <select className='account-dropdown' name="account-list">
                        <option className="account-dropdown-option" value="Cuenta y Listas" selected>Cuenta y Listas</option>
                        <option className="account-dropdown-option" value="value1">Value 1</option>
                        <option className="account-dropdown-option" value="value2">Value 2</option>
                        <option className="account-dropdown-option" value="value3">Value 3</option>
                    </select>
                </div>
                <div className='returns-container'>
                    <button className='returns-button'>
                        <p className='returns-text-1'>Devoluciones</p>
                        <p className='returns-text-2'>Y pedidos</p>
                    </button>
                </div>
                <div className='cart-container'>
                    <button className='cart-button'>
                        <ShoppingCartOutlinedIcon className='cart-icon'></ShoppingCartOutlinedIcon>
                        <p className='carrito-text'>Carrito</p>
                    </button>
                </div>
            </nav>
        </>
    )
}