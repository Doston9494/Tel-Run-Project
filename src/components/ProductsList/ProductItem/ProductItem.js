import './ProductItem.css'
import { Link } from "react-router-dom";
import { backEndUrl } from "../../..";
import { useDispatch, } from 'react-redux';
import { addToBasketAction } from '../../../store/basketReducer';


function ProductItem (props){

    const dispatch = useDispatch()

    const {id, image, title, price, discont_price} = props.oneProduct
    const oneProduct = props.oneProduct

    function basketStop(event){
        event.preventDefault()
        dispatch(addToBasketAction(oneProduct))
    }

    return(
        <div className='product_wrapper'>
            <Link className='link_product_item' to={`/products/${id}`}>
                <div className='image_style_products' style={{backgroundImage: `url(${backEndUrl+image})`}} alt='img'>
                    <button className='button_add_style' onClick={(event) => basketStop(event)}>Add to basket</button>
                </div>
                <div className='products_prices_and_title'>
                    <div className='products_prices'>
                        <p className='product_item_discont_price'>{discont_price +' $'}</p>
                        <p className='product_item_price'>{price +' $'}</p>
                        <p className='product_item_discount'>{Math.round(((discont_price / price) * 100) - 100)} %</p>
                    </div>
                    <p className='product_item_title_descr'>{title}</p>
                </div>
            </Link>
        </div>
    )

}

export default ProductItem