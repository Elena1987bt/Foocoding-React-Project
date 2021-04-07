import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import './App.css';

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
          <Route path="/" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
