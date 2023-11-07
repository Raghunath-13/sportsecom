import React from 'react';
import './App.css';
import Home from './Home';
import Page from './Page';
import Blog from './Blog';
import Shop from './Shop';
import Sale from './Sale';
import Cart from './Cart';
import Login from './Login';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Productlist from './Productlist';



const App = ()=> {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/page' element={<Page/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login'element={<Login/>}/>

      
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
