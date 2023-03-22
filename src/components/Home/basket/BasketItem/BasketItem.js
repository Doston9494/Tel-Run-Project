import './BasketItem.css'
import { useDispatch } from 'react-redux'
import { backEndUrl } from '../../../..'
import { decrCountItemAction, deleteFromBasketAction, incrCountItemAction } from '../../../../store/basketReducer'


function BasketItem(props){
    const {price, discont_price, id, title, url, count} = props

    const dispatch = useDispatch()

    return(
        <div className='basket_elem'>
            <div className='basket_title_wrapper'>
                <img className="image_basket" src={`${backEndUrl}${url}`}/>
                <div className='title_and_button_style'>
                    <h2 className='title_style_basket'>{title}</h2>
                    <div className='button_style_cunter'>
                        <button className='mines_button' onClick={() => dispatch(decrCountItemAction(id))}>-</button>
                        <p>{count}</p>
                        <button className='plus_button' onClick={() => dispatch(incrCountItemAction(id))}>+</button>
                    </div>
                </div>
            </div>
            <div className='price_and_discont_price'>
                <p className='discont_price_basketitem'>{discont_price+' $'}</p>
                <p className='price_basketitem'>{price+' $'}</p>
            </div>
            <button className='delete_button' onClick={() => dispatch(deleteFromBasketAction(id))}>x</button>
        </div>
    )
}

export default BasketItem