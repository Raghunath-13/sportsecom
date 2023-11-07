import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <div>
     <div id='blogwall'>
      <div id='blogletter'>
     <h1>Fashion is a mirror <br/> reflecting the culture</h1>
     <p>Post LayoutBy   |    Alexis RichardsNovember   |    22, 2018</p>
     </div>
     </div>
     <section id='blogsec1'>
      <div className='blogsecletter'>
        <h3>Fashion is anything which is you <br/> and reflects your personality and if you are comfortable with what you wearing you'll look trendy and <br/> fashionable</h3>
        <hr></hr>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections and 1.10 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied English versions from the 1914 translation by H. Rackham. It is a long established fact a reader will be distracted the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal & distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.

Dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it make type specimen book. It has survived not only five centuries, but also the leap electronic typesetting, remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, & more recently with desktop publishing software like Aldus PageMaker including versions.</p>
        </div> 
      <div id='blogpic'>
        <img src='./images/l1.jpg' className='picb'/>
        <img src='./images/l2.jpg'  className='picb'/>
        <img src='./images/l3.jpg'  className='picb'/>
        <img src='./images/l4.jpg'  className='picb'/>



      </div>
      <div id='bloglet2'>
      <h3 style={{width:"80%"}} className='bloglet2-h3'>Fashion is always of the time in which you live. It is not something standing alone. But the grand problem, the most important problem, is to rejeuvenate women. To make women look young. Then their outlook changes. They feel more joyous. The best fashion advice I’d say would be just to do what makes you comfortable and what makes you feel cute.</h3>
      <h4>-SARA SMITH</h4>
      </div>

    
     </section>
    </div>
  )
}

export default Blog