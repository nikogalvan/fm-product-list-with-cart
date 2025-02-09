import { CartProvider } from "./context/CartContext/CartContext";
import Home from "./pages/home/Home";
import "./styles/style.scss";
function App() {
  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

export default App;
