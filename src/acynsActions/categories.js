import { backEndUrl } from ".."
import { getCategoriesAction } from "../store/categoriesReducer"



export const fetchCategories = () => {
    return function(dispatch){
        fetch(`${backEndUrl}/categories/all`)
        .then(res => res.json())
        .then(data => dispatch(getCategoriesAction(data)))
    }
}