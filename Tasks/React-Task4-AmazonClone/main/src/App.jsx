
import './App.css'

import Navbar from '../src/component/Navbar/Navbar.jsx';
import HomeScreen from './Screen/HomeScreen/homeScreen.jsx';
import Footer from '../src/component/Footer/footer.jsx';
import Cart from './Screen/Cart/cart.jsx';

import { Routes, Route } from 'react-router-dom';

import Products from './Screen/HomeScreen/Products/products.jsx';

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />

 
      </Routes>
      <Footer />



    </div>
  )
}

export default App
