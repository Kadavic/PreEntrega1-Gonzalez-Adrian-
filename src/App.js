
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartContext from './Context/CartContext';


function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
