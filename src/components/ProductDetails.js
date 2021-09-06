import React from 'react';
import '../css/ProductDetails.css'

/*Icons*/
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

/*Photos*/
import miniCamera1 from  '../images/mini-camera-1.png'
import bigCamera from '../images/camera.png'


export const ProductDetails = () => {
    return (
        <React.Fragment>
            <div className='product-details-main-container'>

                <div className='back-button-container'>
                    <button className='back-button'>
                        <ArrowBackIosOutlinedIcon className='back-button-icon'/>
                        <p className='back-button-text'>Volver a los resultados</p>
                    </button>
                </div>

                <div className='product-details-container'>

                    <div class='mini-product-picture-container'>
                        <button className='mini-product-picture-button' type='submit'>
                            <img className='mini-product-picture' src={miniCamera1} alt='Camara Fotografica 1'/>
                        </button>
                        <button className='mini-product-picture-button' type='submit'>
                            <img className='mini-product-picture' src={miniCamera1} alt='Camara Fotografica 1'/>
                        </button>
                        <button className='mini-product-picture-button' type='submit'>
                            <img className='mini-product-picture' src={miniCamera1} alt='Camara Fotografica 1'/>
                        </button>
                    </div>

                    <div className='big-product-picture-container'>
                        <img className='big-product-picture' src={bigCamera} alt='Camera'/>
                    </div>

                    <div className='product-detailed-text-container'>
                        <h1 className='product-name'>Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4 L IS USM</h1>
                        <p className='product-brand'>Marca: Canon</p>

                        <div className='pricing-details-container'>
                            <div className='pricing-shipping-details-container'>
                                <p className='pricing-shipping'>Precio:</p>
                                <p className='price'>$100,669.00</p>
                                <p className='shipping'>Envío GRATIS.</p>
                                <p className='details'>Detalles</p>
                            </div>
                            <p className='pricing-message-details'>Hasta <strong>18 meses sin intereses</strong> de $5,592.76.
                            <p className='details'>Ver mensualidades</p><p className='text-mandatory-container'><p className='details'>Solicita tu tarjeta Amazon Recargable</p>y obtén $100 de descuento en tu primera compra mayor a $500</p></p>
                            <p className='price-style-title'>Precio:<strong className='title-result'>Negro</strong></p>
                            <p className='price-style-title'>Estilo: <strong className='title-result'>24-105mm USM Kit</strong></p>
                        </div>

                        <h3 className='about-this-product-title'>Acerca de este artículo</h3>
                        <ul className='product-details-list'>
                            <li className='product-detail'>Alta calidad de imagen con un nuevo sensor CMOS de marco completo de 20 megapíxeles.</li>
                            <li className='product-detail'>Procesador de imagen DIGIC X con una gama ISO de 100-102400; ampliable a 204800.</li>
                            <li className='product-detail'>Disparo continuo de alta velocidad de hasta 12 fps con obturador mecánico y obturador electrónico (silencioso) de hasta 20 fps.</li>
                            <li className='product-detail'>CMOS AF de doble pixel, cubre aproximadamente Área 100% con 1.053 AF.</li>
                            <li className='product-detail'>Seguimiento de asuntos de personas y animales* utilizando tecnología de aprendizaje profundo.</li>
                        </ul>
                    </div>

                    <div className='pre-payment-container'>
                        <p className='price2'>$100,669.00</p>
                        <p className='shipping'>Envío GRATIS.</p>
                        <p className='details'>Detalles</p>
                        <p className='price-style-title'>Llega:<strong className='title-result'>dic 15 - 28</strong></p>
                        <p className='alert-message'>Puede que lo reciba despues de navidad</p>
                        <button className='add-cart-button'>
                            <ShoppingCartOutlinedIcon className='pre-payment-container-button-icon'/>
                            <p className='add-cart-button-msg'>Agregar al carrito</p>
                        </button>
                        <button className='buy-now-button'>
                            <PlayArrowIcon className='pre-payment-container-button-icon'/>
                            <p className='buy-now-button-msg'>Comprar ahora</p>
                        </button>
                        <p className='transaction-msg'>Transacción segura</p>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}