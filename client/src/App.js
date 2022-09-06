import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import CartPage from "./screens/CartPage";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
