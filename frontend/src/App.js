import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { Category } from "./Pages/Category";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginRegister } from "./Pages/LoginRegister";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/headsets" element={<Category category="headsets" />} />
          <Route
            path="/keyboards"
            element={<Category category="keyboards" />}
          />
          <Route path="/mice" element={<Category category="mice" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
