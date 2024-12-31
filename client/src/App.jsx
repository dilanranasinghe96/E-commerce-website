
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirm";
import { OrderHistory } from "./pages/OrderHistory";
import PlaceOrder from "./pages/PlaceOrder";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {

  const userLoginReducer = useSelector((state) => state.userLoginReducer)
  const {userInfo} = userLoginReducer
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route
            exact
            path="/login"
            element={userInfo ? <Navigate to="/"></Navigate> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={userInfo ? <Navigate to="/"></Navigate> : <Register />}
          ></Route>
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />

          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;