 import {BrowserRouter,Routes,Route} from "react-router-dom";
 import Product from "./pages/Product";
 import Login from "./pages/Login";
 import Cart from "./pages/Cart";
 import ProductList from "./pages/ProductList";
 import Home from "./pages/Home";
 import Register from "./pages/Register"
 
 
 const App = () => {
      return (
        <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/product"  element={< Product />} />
        <Route path="/register"  element={<Register/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/productlist"  element={<ProductList/>} />
          </Routes>
     </BrowserRouter>
      )
    };
    
    export default App;