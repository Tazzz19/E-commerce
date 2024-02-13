import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Product from './components/Product/Product'
import ProductDetails from './components/Product/Product-details'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import Store from './redux/Store'
import './App.css'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Products/:id' element={<ProductDetails/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App