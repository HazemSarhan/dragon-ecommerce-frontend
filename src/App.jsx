import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Product Routes */}
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Category Routes */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
