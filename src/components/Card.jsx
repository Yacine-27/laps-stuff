import { useState } from "react";
import styles from "../styles/card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  price,
  isAdded,
  isFavourite,
  initialAmount,
  onAddClick,
  onFavClick,
  // image,
}) {
  const [amount, setAmount] = useState(initialAmount);
  const handleAddClick = () => {
    if (isAdded) setAmount(1);
    onAddClick(id, amount);
  };
  return (
    <li
      id={id}
      className={styles.card}
      style={isAdded ? { backgroundColor: "#ddd", color: "#000" } : {}}
    >
      <Link to={`../item/${id}`}>
        <p>{title}</p>
      </Link>

      <p>price : {price}</p>
      <label htmlFor="amount">amount: </label>
      {/* <img src={image} alt={title} /> */}
      {isAdded ? (
        <p>{amount}</p>
      ) : (
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      )}

      <button type="button" onClick={handleAddClick}>
        {isAdded ? "Remove from" : "Add to"} Cart
      </button>
      <button
        type="button"
        onClick={() => {
          onFavClick(id);
        }}
      >
        {isFavourite ? "Remove from favs" : "Add to favs"}
      </button>
    </li>
  );
}
