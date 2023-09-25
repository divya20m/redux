// App.js
import React from "react";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart App</h1>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
