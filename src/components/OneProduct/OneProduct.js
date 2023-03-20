import './OneProduct.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { backEndUrl } from "../..";
import { fetchOneProduct } from "../../acynsActions/oneProduct";
import { addToBasketAction } from '../../store/basketReducer';



function OneProduct () {
    const {id} = useParams()
    const oneProduct = useSelector(state => state.oneProduct.oneProduct)
    const dispatch = useDispatch()

    useEffect(()=> { dispatch(fetchOneProduct(id))
    }, [])

    return (
        <div className='one_product_container'>
            <div>
                <h3 className='title_style'>{oneProduct.title}</h3>
                <div className="images_one_product" style={{backgroundImage: `url(${backEndUrl}${oneProduct.image})`}}></div>
            </div>
            <div className='prices_container_and_basket'>
                <div className='prices_container'>
                    <h2 className='one_product_discont_price_style'>{oneProduct.discont_price +' $'}</h2>
                    <h2 className='one_product_price'>{oneProduct.price+' $'}</h2>
                    <p className="one_product_item_discounted">{Math.round(((oneProduct.discont_price / oneProduct.price) * 100) - 100)} %</p>
                </div>
                <button className='add_to_basket_style' 
                onClick={() => dispatch(addToBasketAction(oneProduct))}>To basket</button>
                <p className='description_line'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                <p className='description_name'>Description</p>
                <p className='description_content'>{oneProduct.description}</p>
            </div>
        </div>
    )
}


export default OneProduct