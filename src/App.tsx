import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import Catalog from './routes/ClientHome/Catalog';
import Login from './routes/ClientHome/Login';
import ProductDetails from './routes/ClientHome/ProductDetails';
import * as CartService from './services/cart-service';
import { ContextCartCount } from './utils/context-cart';

function App() {

  const quantityCartItem: number = CartService.getCart().items.length;

  const [contextCartCount, setContextCartCount] = useState<number>(quantityCartItem);

  return (
    // assim posso usar este estado quando necessário e onde for necessário
    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product-details/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path='/admin/' element={<Admin />} >
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}

export default App