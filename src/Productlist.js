import React from 'react'
import "./Home.css"

function Productlist({product}) {
  return (
    <div className='flex'>
        {
            product.map((productItem,productIndex)=>{
                   return(
                 
                    
                        <div className='productitm'style={{width:"50%"}} >
                          
                        <img src={productItem.url} width="100%"/> 
                        <p>{productItem.name}</p>| {productItem.category}
                        <p>{productItem.seller}</p>
                        <p>Rs.{productItem.price}/-</p>
                        <button className='cartbtn'>Add To Cart</button>
                        </div>
                       
                        

                  
                    
                   )
            })
        }
        
    </div>
  )
}

export default Productlist