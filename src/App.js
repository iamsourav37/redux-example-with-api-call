import "./App.css";
import React from "react";

import Header from "./container/Header";
import ProductDetails from "./container/ProductDetails";
import ProductList from "./container/ProductList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        {/* switch */}
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
        <Route>
          <h1 className="display-3 text-danger text-center mt-5">
            404 not found
          </h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
