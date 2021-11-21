import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App( current ) {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
                <Products/>
            )
            }}>
          </Route>
          <Route exact path="/cart" render={()=>{
            return(
                <Cart/>
            )
            }}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
