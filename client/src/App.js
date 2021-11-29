
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import "./index.css";
import GlobalStyles from "./constants/GlobalStyle";
import Productpage from "./pages/product/Productpage";
import Orderpage from "./pages/order/Orderpage";
import Loginpage from "./pages/login/Loginpage";



const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<Productpage />} />
        <Route path="/orders/" element={<Orderpage />} />
        <Route path="/login/" element={<Loginpage />} />

      </Routes>
    </Router >)
}

export default App



