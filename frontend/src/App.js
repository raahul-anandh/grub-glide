import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar";
import Cuisine from "./Components/Cuisine";

import Account from "./Components/Account/Account";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

import Admin from "./Components/Admin.jsx";
import CreateFood from "./Components/Admin/CreateFood";
import UpdateFood from "./Components/Admin/UpdateFood.jsx";

import "./App.css";
function App() {
  // localStorage.setItem("user", "admin");
  localStorage.setItem("user", "abc");
  
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
          <Route path = "/createfood" element={<CreateFood/>}/>
          <Route path = "/updatefood" element={<UpdateFood/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
