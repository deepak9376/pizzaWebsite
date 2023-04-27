import React from 'react'
// =========== header
import Header from '../../header/Header'

// =============== footer 
import Footer from '../../footer/Footer'

// =============== rout 
import Rout from '../../../rout/Rout'



const Layout = () => {
  return (
    <div>
        {/* =========== header */}
        <Header/>


        {/* ============== all page div  */}
        <div>
            <Rout/>
        </div>

        {/* ================ footer  */}
        <Footer/>
    </div>
  )
}

export default Layout