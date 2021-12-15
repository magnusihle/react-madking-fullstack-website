
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import "./index.css";
import GlobalStyles from "./constants/GlobalStyle";
import Productpage from "./pages/product/Productpage";
import Orderpage from "./pages/order/Orderpage";
import Loginpage from "./pages/login/Loginpage";
import ProductListPage from "./pages/productList/ProductListPage";
import { useSelector } from "react-redux";
import Adminpage from "./pages/admin/home/Adminpage";
import AdminProductpage from "./pages/admin/products/AdminProductPage";




const App = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<Productpage />} />
        <Route path="/productlist/" element={<ProductListPage />} />
        <Route path="/orders/" element={<Orderpage />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Loginpage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/producthandler" element={<AdminProductpage />} />
      </Routes>
    </Router >)
}

export default App



