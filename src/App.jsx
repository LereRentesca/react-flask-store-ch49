import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import About from './pages/About';
import ShoppingList from './pages/ShoppingList';
import Home from './pages/Home';
import Admin from './pages/Admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalProvider from './context/GlobalProvider';
import Cart from './pages/Cart';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shoppingList" element={<ShoppingList />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
