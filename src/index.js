import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux stuff
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);

// https://github.com/reduxjs/redux/tree/master/examples/shopping-cart/src

