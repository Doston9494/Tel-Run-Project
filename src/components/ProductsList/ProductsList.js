import './ProductsList.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../../acynsActions/categories";
import { fetchAllProducts, fetchProductsByCategories } from "../../acynsActions/products";
import ProductItem from './ProductItem/ProductItem';
import FilterProducts from './FilterProducts/FilterProducts';

function ProductsList(){
    const {id} = useParams()
    const products = useSelector(store => store.products.products).filter(elem => elem.show_by_sale && elem.show_by_price)
    const category = useSelector(store => store.categories.categories).find(elem => elem.id == id)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id === 'all'){
            dispatch(fetchAllProducts())
        } else {
            dispatch(fetchProductsByCategories(id))
        }
        dispatch(fetchCategories())
    
    }, [id])

    return (
        <div>
            <h3 className="title_products_list">{(id === 'all') ? 'All products' : category?.title}</h3>
            <FilterProducts/>
            <div className="products_list_wrapper">
                {products.map(elem => <ProductItem key={elem.id} oneProduct = {elem}/>)}
            </div>
        </div>
    )
}

export default ProductsList