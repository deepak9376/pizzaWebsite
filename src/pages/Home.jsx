import {useEffect , useState} from 'react'
// ====================== bootstrap
import { Container  , Row , Col } from 'reactstrap'
// ========== react router dom 
import { Link } from 'react-router-dom'
// =========== hero image 
import HeroImg from '../assets/images/heroimg.png'

// =========== home css
import '../style/home.css'

// ====================== feature item
import featureimg01 from '../assets/images/service-01.png'
import featureimg02 from '../assets/images/service-02.png'
import featureimg03 from '../assets/images/service-03.png'
// ======================== end 

// ============ product 
import Products from '../assets/fake-data/products'
import ProductCard from '../components/ui/productCard/ProductCard'
// ============ product  end



const Home = () => {

  // ================== filter data btn 
const [Category, setCategory] = useState('All');
const [AllProducts , setAllProducts] = useState(Products)
// ================== filter data btn  end
// =================== service data
  const featureData =[
    {
      title:'quick delivery',
      imgUrl:featureimg01,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, totam.'
    },
  
    {
      title:'Super dine in',
      imgUrl:featureimg02,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, totam.'
    },
  
    {
      title:'easy pick up',
      imgUrl:featureimg03,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, totam.'
    }
  ]
  // =========== service data end 



  // ============= product filter 
  useEffect(()=>{

    // filter product
    if(Category === 'All'){
      setAllProducts(Products)
    }
  
    if(Category === 'BURGER'){
      const FilterProducts = Products.filter(item => item.category === 'Burger')
      setAllProducts(FilterProducts)
    }
  
    if(Category === 'PIZZA'){
      const FilterProducts = Products.filter(item => item.category === 'Pizza')
      setAllProducts(FilterProducts)
    }
  
    if(Category === 'BREAD'){
      const FilterProducts = Products.filter(item => item.category === 'Bread')
      setAllProducts(FilterProducts)
    }
  
  },[Category])
  // ============= product filter  end 
  return (
  <>
    {/* //  ============= hero section start */}
    <section>

{/* ================ hero container */}
<Container className='home'>

{/* =========== row hero */}
<Row className='home-content'>

{/* ============= content col */}
<Col lg='6' md='12' className=' '>
<div className="content md-mx-auto">
<span class="badge rounded-pill bg-warning text-dark">Fast service in our city</span>

<h1 className='mb-4 hero_title'><span>hungry?</span> just wait <br></br> food <span>at our door</span></h1>
<div className="btns">
<button className='all_foods-btn' ><Link to={'/foods'}>see more foods</Link></button>
</div>


</div>
</Col>
{/* ============ content end  */}


{/* ============= hero image col  */}
<Col lg='6' md='12' className=''>
<div className="hero_image">
<img src={ HeroImg} alt="hero image"  className='' />
</div>


</Col>
{/* ============= hero image col  end  */}

</Row>


</Container>

    </section>
    {/* //  ============= hero section end  */}

{/* ==================== service section start */}
<section>
<Container>
<Row>

<Col lg='12' className='text-center service'>
  <h5>what <span>we</span> serve</h5>
  <h4> <span>just sit back </span> at home</h4>
  <h2>what will <span>take  care</span></h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, soluta?</p>
  
   </Col>

   {/* ================ col 2  */}
   {
    featureData.map((item,index)=>(
      <Col lg='4' md='4' key={index}>
<div className="feature-item text-center px-4 py-3">
<img src={item.imgUrl} alt=""  className='w-25 mb-3'/>
<h5 style={{color:'var(--dark-orange)'}}>{item.title}</h5>
<p>{item.desc}</p>

</div>
   </Col>
    ))
   }
   {/* ================ col 2  end   */}



</Row>

</Container>

</section>
{/* ==================== service section end  */}

    {/* ===================================== popular food section  */}
    <section>
      <Container>
<Row>

{/* ================ text col*/}
<Col lg='12'>
  <h2 className='text-center' style={{color:'var(--danger)'}}>popular foods</h2>
</Col>


{/* =========== col 2 start */}
<Col lg='12' className='mt-3'>
  <div className="food-category text-center">
    <button onClick={()=>setCategory('All')}>all</button>
    <button onClick={()=>setCategory('BURGER')}>burger</button>
    <button onClick={()=>setCategory('PIZZA')}>pizza</button>
    <button onClick={()=>setCategory('BREAD')}>bread</button>
  </div>
</Col>
{/* =========== col 2 end */}



{/* ==================== product  */}
{
  AllProducts.map((item)=>(
    <Col lg='3' md='4'  xs='6' className='mt-5 xs-w-50 ' key={item.id}>
<ProductCard  item={item}/>
</Col>
  ))
}
{/* ==================== product  end  */}

</Row>

      </Container>
    </section>
    {/* ===================================== popular food section  end  */}
    </>
  )
}

export default Home