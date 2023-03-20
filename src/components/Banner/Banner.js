import './Banner.css'
import imageBanner from '../Banner/Media/imageBanner.png'


function Banner() {
    return (
        <div >
            
            <div className="bannerWrapper">
                <div className='text_and_button_style'>
                    <div className='season_sale'>
                        <p>New</p>
                        <p>season sale!</p>
                    </div>
                    <div className='sale_and_read_more'>
                        <button className='button_sale'>Sale</button>
                        <button className='read_more'>Read more</button>
                    </div>
                </div>
                <div className='banner_image'>
                    <img src={imageBanner} alt='imageBanner'/>
                </div> 
            </div>
        
        </div>
    )
}

export default Banner