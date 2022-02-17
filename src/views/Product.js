import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom';
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import iconPrevious from "../images/icon-previous.svg"
import iconNext from "../images/icon-next.svg"
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

        </div>
    )
}

export default Product