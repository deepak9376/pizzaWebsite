import { useRef } from "react"

// ============== bootstrap 
import { Container } from "reactstrap"
// ============== react router dom
import { Link , NavLink } from "react-router-dom"
// ============= header css
import '../../style/header.css'

// ==============  logo
import Logo from '../../assets/images/Food-Media-Logo.png'






const Header = () => {
//    = ============== navlink
const nav_links =[
  {
    display : 'home',
    path :'/home'
  },
  {
    display : 'foods',
    path :'/foods'
  },
  {
    display : 'cart',
    path :'/cart'
  },
  {
    display : 'contact',
    path :'/contact'
  }
]
        // =================== navlink  end

        // ============================= menu 
        const menuRef = useRef(null)
        const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

        // ===============  menu end 


      
        
  return <header className="header">
<Container className="d-flex align-items-center justify-content-between  align-baseline ">
{/* ================ logo  */}
<div className="logo">
<Link to={'/home'} className="text-decoration-none ">
  <img src={Logo}  alt="logo"  className="img-fluid"/>
</Link>
</div>
{/* ============== logo end  */}


{/* ================ nav */}
<div className="navigation" onClick={toggleMenu} ref={menuRef}>
<nav className="nav">
{
  nav_links.map((item,index) =>(
   <NavLink  to={item.path} key={index}
   
   className = {(navClass) => navClass.isActive ? "active_menu" : ''}
   
   >
{item.display}
   </NavLink>
  ))
}
</nav>
</div>
{/* ================ nav end  */}


{/* ============= right nav  */}
<div className="rightNav ">

{/* ================= span  cart */}
<span className="cart_icon  "  >
  <i class="ri-shopping-cart-2-line"></i>
<span className="cart_badge">
 0
</span>
  </span>
{/* ================= span  cart  end */}

{/* ======================== user  */}
<span className="user">
    <Link className='text-decoration-none text-light' to={'/login'}><i class="ri-user-line"></i></Link>
  </span>
{/* ======================== user  end */}


{/* =================== mobile menu */}
<span className="mobile_menu"  onClick={toggleMenu}>
<i class="ri-menu-4-fill"></i>
</span>
{/* =================== mobile menu end  */}
  
</div>
{/* ============= right nav  end  */}

</Container>
  </header>
}

export default Header