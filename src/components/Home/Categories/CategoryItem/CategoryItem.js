import './CategoryItem.css'
import { Link } from "react-router-dom"
import { backEndUrl } from "../../../.."


function CategoryItem(props){
    const {id, title, image} = props
    return (
        <div>
            <Link className="link_css" to={`/categories/${id}`}>
                <div className='title_category_item_style'>
                    <div className='image_category_item_style' style={{backgroundImage: `url(${backEndUrl+image})`}} alt='img'>
                    </div>
                    <p>{title}</p>
                </div>  
            </Link>
        </div>
    )
}


export default CategoryItem