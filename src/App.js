import React from "react";
// components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

// redux stuff
import { Provider } from 'react-redux'
import store from './store'

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <Cart />
    </Provider>
  );
}

export default App;
