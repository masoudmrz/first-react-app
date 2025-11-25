import React from "react";
interface Props {
  itemCard: string[];
  onClear: () => void;
}
const Cart = ({ itemCard, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {itemCard.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
