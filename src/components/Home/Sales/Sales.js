import './Sales.css'
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../../acynsActions/products';
import ProductItem from '../../ProductsList/ProductItem/ProductItem';


const Sales = forwardRef ((props, ref) => {
  const productsSaleList = useSelector(store => store.products.products).filter(elem => elem.price - elem.discont_price !== 0)
  const productsSortList = productsSaleList.sort(() => Math.random() - 0.5).slice(0,3)
  const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchAllProducts('all'))
    }, [])
  
    return (
      <div ref={ref} className="sales_wrapper">
        <p className='text_sales'>Sales</p>
        <div className='sales_container'>
           {productsSortList.map(elem =><ProductItem key={elem.id} oneProduct = {elem}/>)}  
          </div>
      </div>
    )
  })
  
  export default Sales