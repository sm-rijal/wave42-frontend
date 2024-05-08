import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home, About, Contact, DetailUser, NotFound, Product} from "./pages";
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Charts from './pages/Charts';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import { useVerifyToken } from './hook/useVerifyToken';
import { useEffect } from 'react';
import { useAuthContext } from './hook/useAuthContext';

function App() {

  const {verifyToken} = useVerifyToken()
  const {user} = useAuthContext()

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* <Route element={<PrivateRoute />} > */}
          {/* Private Route */}
          <Route path="/contact" element={user ? <Contact /> : <Login />} />
          <Route path="/detail-user/:id" element={user ? <DetailUser /> : <Login /> } />
          <Route path="/about" element={user ? <About />: <Login />} />
          <Route path="/product" element={user ?<Product />: <Login />} />
          <Route path="/add-product" element={user ?<AddProduct />: <Login />} />
          <Route path="/edit-product/:id" element={user ?<EditProduct />: <Login />} />
          <Route path="/charts" element={user ?<Charts />: <Login />} />

          {/* Akhir Private Route */}

        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;
