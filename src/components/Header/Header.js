import './Header.css'
import Logo from '../Header/Media/imageLOGO.png'
import React from 'react'
import {ReactComponent as SvgBasket} from './VectorBasket.svg'
import { Link } from 'react-router-dom'


function Header (props) {
    const {scrollSalesMaker, scrollCategoriesMaker, scrollCouponMaker, scrollContactsMaker} = props

    return(
        <div className="header">
            <div className='logo_wrapper'>
                <Link to ='/'>
                    <div className="logo">
                        <img src={Logo} alt='Logo'/>
                    </div>
                </Link>
                <Link to={`/categories/all`}>
                    <button className="catalogueButton">Catalog</button>
                </Link>
            </div>
            <div className="headerWrapper">
                <p onClick={scrollCategoriesMaker}>Categories</p>
                <p onClick={scrollCouponMaker}>Coupon</p>
                <p onClick={scrollSalesMaker}>Sales</p>
                <p onClick={scrollContactsMaker}>Contacts</p>
                <Link to={`/basket`}>
                    <SvgBasket/>
                </Link>
            </div>
        </div>
    )
    
}

export default Header