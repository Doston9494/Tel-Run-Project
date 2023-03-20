import { backEndUrl } from ".."
import { getProductsAction } from "../store/productsReducer"



export const fetchProductsByCategories = (id) => {
    return function(dispatch){
        fetch(`${backEndUrl}/categories/${id}`)
            .then(res => res.json())
            .then(data => dispatch(getProductsAction(data)))
    }
}

export const fetchAllProducts = () => {
        return function(dispatch){
        fetch(`${backEndUrl}/products/all`)
            .then(res => res.json())
            .then(data => dispatch(getProductsAction(data)))
        }
}
