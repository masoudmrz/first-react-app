import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cart, setcart] = useState({
    dis: 0.1,
    items: [
      { id: 1, title: "product1", quantity: 1 },
      { id: 2, title: "product1", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setcart({
      ...cart,
      items: cart.items.map((item) =>
        item.title === "product1"
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    });
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
