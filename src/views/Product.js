import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom';
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import iconPrevious from "../images/icon-previous.svg"
import iconNext from "../images/icon-next.svg"
import iconMinus from "../images/icon-minus.svg"
import iconPlus from "../images/icon-plus.svg"
import '../App.css';


const Product = () => {
    return(
        <div className='d-flex flex-column'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={product1} class="d-block w-100 product-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={product2} class="d-block w-100 product-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={product3} class="d-block w-100 product-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={product4} class="d-block w-100 product-image" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <img className='image-carousel-button' src={iconPrevious} alt="" width="30" height="30"/> 
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <img className='image-carousel-button' src={iconNext} alt="" width="30" height="30"/> 
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-flex flex-column px-4 py-3">
                <div className="brand text-orange py-2">
                    SNEAKER COMPANY
                </div>
                <div className='product text-black py-2'>
                    Fall Limited Edition Sneakers
                </div>
                <div className='product-description text-grey py-2'>
                    These low-profile sneakers are your casual wear companion. Featuring a durable rubber outer sole, they'll withstand
                    everything the weather can offer
                </div>
                <div className="pricing-div d-flex flex-row justify-content-between align-items-center mb-3">
                    <div className='current-price-div d-flex flex-row'>
                        <div className='current-price me-2'>$125.00</div>
                        <div className='discount border rounded bg-orange d-flex flex-row justify-content-center align-items-center'>50%</div>
                    </div>
                    <div className='old-price text-decoration-line-through'>$250.00</div>
                </div>
                <div className='item-quantity-div bg-light d-flex flex-row justify-content-between'>
                    <button className='quantity-button bg-light'>
                        <img className='quantity-button-image' src={iconMinus} alt="" width="20" height="20"/> 
                    </button>
                    <div className='quantity'>0</div>
                    <button className='quantity-button bg-light'>
                        <img className='quantity-button-image' src={iconPlus} alt="" width="20" height="20"/> 
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Product