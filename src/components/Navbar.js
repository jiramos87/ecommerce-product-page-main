import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/logo.svg'
import iconCart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

const Navbar = () => {
    const [ sidebar, setSidebar ] = useState(true);
    const { store, actions } = useContext(Context)
    
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
             <nav class="navbar navbar-light bg-white">
                <div class="container-fluid d-flex flex-row">
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <a className='navbar-brand' href="#"> <img src={logo} alt="" width="100" height="26"/></a>
                    </div>
                    <div>
                        <a className='menu-item' href="#"><img src={iconCart} alt="" width="30" height="30"/></a>
                        <a className='menu-item' href="#"><img src={avatar} alt="" width="30" height="30"/></a>
                    </div>
                    
                </div>
            </nav>
            <div class="offcanvas offcanvas-start w-75" id="offcanvas">
                <div class="bg-white p-4">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <ul>
                        <li>
                            Collections
                        </li>
                        <li>
                            Men
                        </li>
                        <li>
                            Women
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
           
        </>
    )
}

export default Navbar