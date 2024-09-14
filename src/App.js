import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Kontakt from "./pages/Kontakt";
import Cart from "./pages/Cart";
import { CartProvider } from "./helpers/CartContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; //Za vise stranica

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/menu' exact element={<Menu />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Kontakt />} />
            <Route path='/cart' exact element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  )
}

export default App;
