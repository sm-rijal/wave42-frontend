import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home, About, Contact, DetailUser, NotFound, Product} from "./pages";
import AddProduct from './pages/AddProduct';
// import {About, Contact} from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import DetailUser from "./pages/DetailUser";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-user/:id" element={<DetailUser />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
