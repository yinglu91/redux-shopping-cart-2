import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Products from './components/Products'
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />

      <section className="container">
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
