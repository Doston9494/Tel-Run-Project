import { backEndUrl } from ".."
import { getOneProductAction } from "../store/oneProductReducer"



export const fetchOneProduct = (id) => {
    return function (dispatch){
        fetch(`${backEndUrl}/products/${id}`)
        .then(res => res.json())
        .then(data => dispatch(getOneProductAction(data[0])))
    }
}