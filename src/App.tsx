import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import product from "./productById/product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Categories from "./pages/Categories";

const WithNavBar = ({ Component, ...rest }: { Component: any }) => (
  <>
    <Header />
    <Component {...rest} />
    <Footer />
  </>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<WithNavBar Component={LandingPage} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<WithNavBar Component={product} />}
          ></Route>
          <Route path="/cart" element={<WithNavBar Component={Cart} />}></Route>
          <Route
            path="/checkout"
            element={<WithNavBar Component={Checkout} />}
          ></Route>
          <Route
            path="/categories/:categoryId"
            element={<WithNavBar Component={Categories} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
