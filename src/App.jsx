import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home, About, Contact, DetailUser, NotFound} from "./pages";
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
      </Routes>
    </Router>
  );
}

export default App;
