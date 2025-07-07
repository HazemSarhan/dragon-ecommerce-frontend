import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import { Toaster } from 'react-hot-toast';
import MyAccount from './pages/MyAccount';
import ProtectedRoute from './components/ProtectedRoute';
import AccountSettings from './pages/AccountSettings';
import MyOrders from './pages/MyOrders';
import MyAccountLayout from './components/MyAccountLayout';
import AdminLayout from './components/AdminLayout';
import AdminCategories from './pages/AdminCategories';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import AdminProducts from './pages/AdminProducts';
import NotFoundPage from './pages/NotFoundPage';
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

          <Route
            path="/my-account"
            element={
              <ProtectedRoute>
                <MyAccountLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <AccountSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <ProtectedAdminRoute>
                <AdminCategories />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedAdminRoute>
                <AdminProducts />
              </ProtectedAdminRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
