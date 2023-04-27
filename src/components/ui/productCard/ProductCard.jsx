import React from 'react'
// ============== css
import '../../../style/productCard.css'
// ================== import products image 
import productImg from '../../../assets/images/product_2.1.jpg'
// ============= link 
import { Link } from 'react-router-dom'
// ============= bootstrap






const ProductCard = (props) => {
    const {id, title, image01 ,price} =props.item
    
  return (
    <div className=''>
    <div className='product'>
    <Link to={`/foods/${id}`} className='text-decoration-none'>
        <p className='text-center fw-bold ' style={{color: 'var(--danger)'}}>{title}</p>
        {/* ========= product image  */}
        <div className="productImg text-center">
            <img src={image01} alt="" className='w-75' />
        </div>
        {/* ========= product image   end*/}

        {/* =========== price section  */}
        <p className='text-center fw-bolder text-danger'> Price : <span>${price}</span></p>
        {/* =========== price section  end  */}
</Link>
        {/* ============= button  */}
       <div className="text-center py-1">
       <button className='addBtn'>add to cart</button>
       </div>
        {/* ============= button  end  */}
    </div>

</div>
  )
}

export default ProductCard