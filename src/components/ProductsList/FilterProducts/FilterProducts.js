import './FilterProducts.css'
import { filterPriceProductsAction, filterSalesProductsAction, sortProductsAction } from '../../../store/productsReducer'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'



function FilterProducts(){
    const dispatch = useDispatch()
    const formRef = useRef()


    function setMinMaxPrice(e){
        let data = new FormData(formRef.current)
        dispatch(filterPriceProductsAction(Object.fromEntries(data)))
    }

    return(
    <div className="title_select_products_list">
        <div className='max_min_price_container'>
            <form ref={formRef} onChange={() => setMinMaxPrice()}>
                <div className='max_min_price'>
                <p>Price</p>
                    <input className='input_price_from' type='number' name='min_price' placeholder='   from'/>
                    <input className='input_price_until' type='number' name='max_price' placeholder='  to'/>
                </div>
            </form>
        </div>
        <div className='discunted_sorted'>
            <div className='label_discounted_price'>
                <p>Discounted products</p>
                <label className='lebel_checkbox'>
                    <input onChange={(event) => dispatch(filterSalesProductsAction(event.target.checked))} type={'checkbox'}/>
                </label>
            </div>
            <p>Sorted</p>
        </div>
        <select className='select_size' onChange={(event) => dispatch(sortProductsAction(event.target.value))}>
            <option value={0}>Default</option>
            <option value={1}>Sort by falling price</option>
            <option value={2}>Sort by growing price</option>
        </select>
    </div>
    )
                             
}

export default FilterProducts