import './Coupon.css'
import imageSales from '../Coupon/Madia/imageSales.png'
import { forwardRef } from 'react'


const Coupon = forwardRef ((props, ref) => {

    return (
        <div ref={ref} className="manu_sales">
            <div className='image_sales_style'>
                <img src={imageSales} alt='imageSales'/>
            </div>
            <div className='sales_all'>
                <div>
                    <p className='discount_text_big'>5% discount</p>
                    <p className='discount_text_small'>on first order</p>
                </div>
                <div className='input_discount_style'>
                    <input className='input' type="tel" placeholder='    +49'></input>
                    <button className="get_your_discount">Get your discount</button>
                    
                </div>   
            </div>
        </div>
    )
})

export default Coupon