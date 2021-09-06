import React from 'react'
import '../css/Product.css'


export let Product = (props) =>{

    return (
        <React.Fragment>
                    <div className='product-container'>
                        <img className='product-image' src={props.photo} alt={props.photo} />
                        <p className='product-name'>{props.name}</p>
                        <div className='products-prices-container'>
                            <p className='product-price'>{`$${props.price}`}</p>
                        </div>
                    </div>
        </React.Fragment>
    )
}