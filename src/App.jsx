import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import { Routes, Route } from 'react-router-dom';  // React Router v6 import
// Inside App component
<Switch>
  <Route path="/" exact component={ProductList} />
  <Route path="/cart" component={CartItem} />
</Switch>
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
import { Link } from 'react-router-dom';

<nav>
  <Link to="/">Shop</Link> | <Link to="/cart">Cart</Link>
</nav>