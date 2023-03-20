import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../../../acynsActions/categories"
import CategoryItem from "../CategoryItem/CategoryItem"


function CategoriesList (){
    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(fetchCategories())
    }, [])

    return(
        <div>
            <div className='catalog_wrapper'>
                <h3 className='stayle_catalog'>Categories</h3>
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
}

export default CategoriesList