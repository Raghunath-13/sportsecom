import React from 'react'
import "./Home.css"
import Productlist from './Productlist'
// import { FaBeer,FaBasketShopping } from 'react-icons/fa'
import { useState } from 'react'


function Home() {
  const [product, setProduct] = useState([
    {
      url:'./images/redT.jpg',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    },
    {
      url:'./images/blackS.jpg',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    },
    {
      url:'./images/nikeshoe.jpg',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    }
    
  ])
  return (
    <>
    <div className='greenwall'>
      <div className='herocontent'>
      <div className='hero-player'>
      <img src='./images/slider-01.png' className='hero-player'/> 
      </div>
      <div className='heroheadbox'>
      <div className='hero-head'>
        <h3>MENS CREW JACKET</h3>
        <h1 className='hero-h1'>RUNNING <br/>DRYFIT</h1>
        <h3>$115</h3>
        <button className='herocart-btn'><i class="fa-solid fa-basket-shopping"></i>  ADD TO CART</button>
      </div>
      </div>
      </div>
    </div>
    <section id='homesec1'>
     <div className='sec1'>
      <img src='./images/t1.jpg'id='t1img'/>
      <img src='./images/t2.jpg' className='sec1img'/>
      <img src='./images/t3.jpg' className='sec1img'/>
      
      

     </div>
     <div id='sec1letters'>
      <h3 style={{color:"#A4A4A4"}}>NEW ARRIVAL</h3>
      <h1>
        NIKE MEN'S <br/>COLLECTION</h1>
        <button className='sec1btn'>SHOP NOW</button>
     </div>
    </section>
    <Productlist product={product}></Productlist>
    
    
    </>
  )
}

export default Home