import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import Catalog from './routes/ClientHome/Catalog';
import Login from './routes/ClientHome/Login';
import ProductDetails from './routes/ClientHome/ProductDetails';
import * as CartService from './services/cart-service';
import { ContextCartCount } from './utils/context-cart';

import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AccessTokenPayloadDTO } from './models/auth';
import Confirmation from './routes/Confirmation';
import * as authService from './services/auth-service';
import { ContextToken } from './utils/context-token';
import { history } from './utils/history';

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    setContextCartCount(CartService.getCart().items.length);

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);


  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      {/* assim posso usar este estado quando necessário e onde for necessário */}
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }} >
        <HistoryRouter history={history}>
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<ClientHome />} >
              <Route index element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="product-details/:productId" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              {/* utiliza mesmo nome passado pelo params */}
              <Route path="confirmation/:orderId" element={<Confirmation />} />
            </Route>

            {/* Not necessary sent to backend */}
            <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>} >
              <Route index element={<AdminHome />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* </BrowserRouter> */}
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}

export default App