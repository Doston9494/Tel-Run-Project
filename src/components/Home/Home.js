import Banner from "../Banner/Banner"
import Categories from "./Categories/Categories"
import Coupon from "../Coupon/Coupon"
import Sales from "./Sales/Sales"

function Home(props){
    const {SalesRef, CategoriesRef, CouponRef} = props
    return(
        <div>
            <Banner/>
            <Categories ref={CategoriesRef}/>
            <Coupon ref={CouponRef}/>
            <Sales ref={SalesRef}/>
        </div>
    )
}

export default Home