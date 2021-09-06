import React from 'react';
import '../css/RelatedProductContainer.css'


export const RelatedProductContainer = (props) => {
    return (
        <div className='products-container'>
            <h3 className='container-title'>Productos relacionados con este articulo</h3>
            <div className='product-carrousel'>
                {props.children}
        </div>
    </div>
    )
}