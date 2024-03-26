import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar";
import Cuisine from "./Components/Cuisine";
import Account from "./Components/Account/Account";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

import "./App.css";
function App() {
  return (
    <div className="mainRoot">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Cuisine/>}/>
          <Route path = "/cart" element={<Cart/>}/>
          <Route path = "/account" element={<Account/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/admin" element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
