import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Cuisine from "./Components/Cuisine";

import "./App.css";
function App() {
  return (
    <div className="mainRoot">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Cuisine/>}/>
          <Route path = "/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
