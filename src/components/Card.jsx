import { useState } from "react";
import styles from "../styles/card.module.css";

export default function Card({
  id,
  title,
  price,
  isAdded,
  initialAmount,
  onSelection,
  onRemoval,
  image,
}) {
  const [amount, setAmount] = useState(initialAmount);
  const handleClick = () => {
    if (isAdded) {
      onRemoval(id);
    } else onSelection(id, amount);
  };
  return (
    <li
      id={id}
      className={styles.card}
      style={isAdded ? { backgroundColor: "#ddd", color: "#000" } : {}}
    >
      <p>{title}</p>
      <p>price : {price}</p>
      <label htmlFor="amount">amount: </label>
      {/* <img src={image} alt={title} /> */}
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="button" onClick={handleClick}>
        {isAdded ? "Remove from Cart" : "Add to cart"}
      </button>
    </li>
  );
}
