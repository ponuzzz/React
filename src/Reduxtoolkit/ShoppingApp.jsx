import Cart from "./components/Cart.jsx";
import ProductList from "./components/ProductList.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./style.css";


function ShoppingApp() {
  return (
    <Provider store={store}>
      <div className="container mt-4">

        <h1 className="text-center mb-4">🛒 Shopping Cart</h1>

        <div className="row g-4">

          {/* LEFT SIDE – PRODUCTS */}
          <div className="col-md-8">
            <div className="p-3 shadow rounded bg-white">
              <h3 className="mb-3">Products</h3>
              <ProductList />
            </div>
          </div>

          {/* RIGHT SIDE – CART */}
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
              <Cart />
            </div>
          </div>

        </div>

      </div>
    </Provider>
  );
}

export default ShoppingApp;
