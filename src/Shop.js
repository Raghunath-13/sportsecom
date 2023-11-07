import React from 'react'
import { useState } from 'react'
import Productlist from './Productlist'

function Shop ()  {
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
    },
    {
      url:'./images/blueT.webp',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    },
    {
      url:'./images/nikebag.jpg',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    },
    {
      url:'./images/nikebag.jpg',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    },
    {
      url:'./images/nikebag.jpg',
      name:"pants",
      category:"clothes",
      seller:"amazon",
      price:"160$"
    },
   

  ])

  return (
    <div>
    <Productlist product={product}></Productlist>
    <Productlist product={product}></Productlist>
    </div>
  )
}

export default Shop