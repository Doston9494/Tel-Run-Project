import './Categories.css'
import { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../acynsActions/categories";
import CategoryItem from './CategoryItem/CategoryItem';
import { Link } from 'react-router-dom';



const  Categories = forwardRef((props, ref) => {
    const categories = useSelector(store => store.categories.categories).slice(0,4) // metod slice ограничевает количество элементов
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(fetchCategories())
    }, [])

    return(
        <div ref={ref}>
            <div className='catalog_wrapper'>
                <h3 className='stayle_catalog'>Catalog</h3>
                <div className='button_style_categories'>
                    <Link to={`/categories`}>
                        <button className='button_all_categories'>All categories</button>
                    </Link>
                </div>
                
            </div>
            <div className="Categories">
                {categories.map(elem =>
                    <CategoryItem
                        key={elem.id}
                        id = {elem.id}
                        title = {elem.title}
                        image = {elem.image}  
                    />
            )}
            </div>
        </div>
    )
})

export default Categories