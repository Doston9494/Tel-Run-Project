import './App.css'
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import ProductsList from "./ProductsList/ProductsList"
import Home from "./Home/Home"
import OneProduct from "./OneProduct/OneProduct"
import Basket from "./Home/basket/Basket"
import { Routes, Route } from "react-router-dom"
import "@fontsource/montserrat"
import CategoriesList from "./Home/Categories/CategoriesList/CategoriesList"
import { useRef } from 'react'


function App () {

    const CategoriesRef = useRef()
    const CouponRef = useRef()
    const ContactsRef = useRef()
    const SalesRef = useRef()

    const scrollSalesMaker = () => {
        SalesRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const scrollCategoriesMaker = () => {
        CategoriesRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const scrollCouponMaker = () => {
        CouponRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollContactsMaker = () => {
        ContactsRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div>
            <Header scrollSalesMaker={scrollSalesMaker} 
                scrollCategoriesMaker = {scrollCategoriesMaker}
                scrollCouponMaker = {scrollCouponMaker}
                scrollContactsMaker = {scrollContactsMaker}
                />
                <Routes>
                    <Route path="/" element={<Home 
                                                SalesRef={SalesRef}
                                                CategoriesRef = {CategoriesRef}
                                                CouponRef={CouponRef}
                                            />}/>
                    <Route path="/categories/:id" element={<ProductsList/>}/>
                    <Route path="/categories" element={<CategoriesList/>}/>
                    <Route path="/products/:id" element={<OneProduct/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>
            <Footer ref={ContactsRef}/>
        </div>
    )
}

export default App