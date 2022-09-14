import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import ShippingPage from "./Pages/ShippingPage";
import PaymentPage from "./Pages/PaymentPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";
import FinishOrder from "./Pages/FinishOrder";
import SortByPrice from "./Pages/SortByPrice";
import SortByName from "./Pages/SortByName";
import LensesPage from "./Pages/LensesPage";
import CamerasPage from "./Pages/CamerasPage";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/lenses" element={<LensesPage />} />
            <Route path="/cameras" element={<CamerasPage />} />
            <Route path="/finish" element={<FinishOrder />} />
            <Route path="/byprice" element={<SortByPrice />} />
            <Route path="/byname" element={<SortByName />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart">
              <Route path=":id" element={<CartPage />} />
              <Route path="" element={<CartPage />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
