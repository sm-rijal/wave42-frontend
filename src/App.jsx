import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Contact, DetailUser, NotFound, Product } from "./pages";
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Charts from './pages/Charts';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import { useVerifyToken } from './hook/useVerifyToken';
import { useEffect } from 'react';
import { useAuthContext } from './hook/useAuthContext';
import CallbackOauthGoogle from './components/CallbackOauthGoogle';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { verifyToken } = useVerifyToken();

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth-success" element={<CallbackOauthGoogle />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail-user/:id" element={<DetailUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/charts" element={<Charts />} />
        </Route>
        {/* End of Private Routes */}

        {/* Handle 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
