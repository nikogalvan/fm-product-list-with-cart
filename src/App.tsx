import { Route, Routes } from "react-router";
import { CartProvider } from "./context/CartContext/CartContext";
import Home from "./pages/home/Home";
import "./styles/style.scss";
import Example from "./pages/example/Example";
function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
