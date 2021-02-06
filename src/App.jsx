import React from "react"
import DataProvider from "./DataProvider"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import ShowProduct from "./ShowProduct"
import Header from "./Header"
import Cart from "./Cart"
import BecomeASeller from "./BecomeASeller"

let App = (props) => {
  return (
    <DataProvider>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ShowProduct/:id" component={ShowProduct} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/BecomeASeller" component={BecomeASeller} />
        </Switch>
      </Router>
    </DataProvider>
  )
}

export default App