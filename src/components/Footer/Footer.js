
import { forwardRef } from 'react'
import './Footer.css'
import {ReactComponent as SvgInstagram} from './VectorInstagram.svg'
import {ReactComponent as SvgWhatsapp} from './VectorWhatsapp.svg'

const Footer = forwardRef((props, ref) => {
    return(
        <div ref={ref} className='footer_main'>
            <div className='contacts_main'>
              <h2 className='contacts_footer'>Contacts</h2>
              <h2 className='contact_number'>+49 171 77 77 717</h2>
              <div className='instagram_whatsapp'>
                  <div className='instagram'>
                    <p className='vector_insta'><SvgInstagram/></p>
                    <p>instagram</p>
                  </div>
                  <div className='whatsapp'>
                    <p className='vector_whatsapp'><SvgWhatsapp/></p>
                    <p>whatsapp</p>
                  </div>
              </div>
            </div>
           <div className='adress_main'>
             <h2 className='adress'>Adress</h2>
             <h3 className='adress_content'>Linkenstrasse 2, 8 OG, 10785, <br/> Berlin, Deutschland</h3>
             <p className='workinngs_hours'>Working hours:</p>
             <h3 className='hours_day'>24 hours a day</h3>
           </div>
        </div>
    )
    
})

export default Footer