import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductListRoute from "./ProductListRoute";
//import ProductPageRoute from "./ProductPageRoute";
import Search from "../components/Search/Search";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <ProductListRoute />
    </Route>

    <Route exact path="/search">
      <Search />
    </Route>

    <Route exact path="/cart">
      <Cart />
    </Route>
  </Switch>
);

export default Routes;
