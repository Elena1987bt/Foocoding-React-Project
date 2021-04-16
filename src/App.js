import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Loading from './components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading />;
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/productDetail/:id" exact>
            <ProductDetailPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
