import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home, About, Contact, DetailUser, NotFound, Product} from "./pages";
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Charts from './pages/Charts';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />} >
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail-user/:id" element={<DetailUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/test" element={<Test />} />

        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
