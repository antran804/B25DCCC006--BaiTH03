import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout';
import HomePage from './pages/homepage';
import ProductDetailPage from './pages/producdetailpage';
import CartPage from './pages/cartpage';
import LoginPage from './pages/loginpage';
import CheckoutPage from './pages/checkoutpage';
import NotFoundPage from './pages/notfoundpage';
import ProtectedRoute from './components/protectedroute';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;