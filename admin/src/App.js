
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import GlobalStyles from "./constants/GlobalStyles";
import "./index.css";
import Productpage from "./pages/products/Productpage";




const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/producthandler" element={<Productpage />} />

      </Routes>
    </Router >)
}

export default App



