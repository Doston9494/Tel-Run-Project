import './Basket.css'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from './BasketItem/BasketItem'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { clearBasketAction } from '../../../store/basketReducer'

function Basket (){
    const basketList = useSelector(store => store.basket.basket)

    let sum = basketList.reduce((acum, elem) => acum + elem.discont_price * elem.count, 0)
    console.log(basketList);
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('basketList', JSON.stringify(basketList))
    }, [basketList])

    return(
        <div>
            <div className='basket_all'>
                <div className='basket_style'>
                    <div className='basket_and_back_to_shop_style'>
                        <div>
                            <h2 className='text_basket'>Basket</h2>
                            <p className='home' >Home  /  Basket</p>
                        </div>
                        <div className='home_container'>
                            <Link to={`/categories/all`}>
                                <p className='back_to_shop'>Back to shop {'>'}</p>
                            </Link>
                        </div>
                    </div>
                    <div className='products_to_basket'>
                        {basketList.map(elem => 
                        <BasketItem 
                            price = {elem.price}
                            discont_price = {elem.discont_price}
                            id = {elem.id}
                            title = {elem.title}
                            url = {elem.image}
                            count = {elem.count}
                        />)}
                    </div> 
                </div>
                <div className='order_place'>
                    <p className='order_details'>Order details</p>
                    <div className='total_sum'>
                        <p className='total'>Total </p>
                        <p className='sum_basket'>{sum} $</p>
                    </div>
                    <input className='input_basket' placeholder='     Phone number' type="number"></input>
                    <button className='order' onClick={() => dispatch(clearBasketAction())}>Order</button>
                </div>
            </div> 
        </div>
    )
}

export default Basket
