import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import CartPage from "./screens/CartPage";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import ProfilePage from "./screens/ProfilePage";
import ShippingPage from "./screens/ShippingPage";
import PaymentPage from "./screens/PaymentPage";
import PlaceOrderPage from "./screens/PlaceOrderPage";
import SortProduct from "./screens/SortProduct";
import OrderPage from "./screens/OrderPage";

function App() {
  return (
    <div>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/sortproduct" element={<SortProduct />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart">
              <Route path=":id" element={<CartPage />} />
              <Route path="" element={<CartPage />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
