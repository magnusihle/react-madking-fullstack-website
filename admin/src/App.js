
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import GlobalStyles from "./constants/GlobalStyles";
import "./index.css";
import Productpage from "./pages/products/Productpage";
import Login from "./pages/login/Login";




const App = () => {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>


      {admin && <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/producthandler" element={<Productpage />} />

      </Routes>}

    </Router >)
}

export default App



