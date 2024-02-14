import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { Category } from "./Pages/Category";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginRegister } from "./Pages/LoginRegister";
import { Footer } from "./Components/Footer/Footer";
import headset_banner from "./Components/Assets/headset-banner.png";
import keyboard_banner from "./Components/Assets/keyboard-banner.png";
import mouse_banner from "./Components/Assets/mouse-banner.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/headsets"
            element={<Category banner={headset_banner} category="headset" />}
          />
          <Route
            path="/keyboards"
            element={<Category banner={keyboard_banner} category="keyboard" />}
          />
          <Route
            path="/mice"
            element={<Category banner={mouse_banner} category="mouse" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
