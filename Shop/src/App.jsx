import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catagories from "./pages/Catagories";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Help from "./pages/Help";
import Footer from "./components/footer/Footer";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import MerchantUploadPage from "./pages/MerchantUploadPage";
function App() {
  const [correct, setCorrect] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/user" element={<HomePage />} />
          <Route path="/merchant" element={<MerchantUploadPage />} />
          <Route path="*" element={<p>error</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
