import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

export default function Cart() {
  const { phones, laptops, onReset } = useOutletContext();
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const addedItems = (array) => {
    if (!array) return [];
    return array.filter((item) => {
      return item.isAdded;
    });
  };
  const addedLaptops = addedItems(laptops.laptopsData);
  const addedPhones = addedItems(phones.phonesData);
  const calculateOneItem = (item) => {
    return item.price * item.amount;
  };
  const calculateTotalPurchase = (items) => {
    const amount = items.reduce((prev, curr) => {
      return prev + calculateOneItem(curr);
    }, 0);
    return amount.toFixed(2);
  };
  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          initialAmount={item.amount}
          isAdded={item.isAdded}
          isFavourite={item.isFavourite}
          onAddClick={
            item.category === "phones"
              ? phones.handleAddClickPhone
              : laptops.handleAddClickLaptop
          }
          onFavClick={
            item.category === "phones"
              ? phones.handleFavouriteClickPhone
              : laptops.handleFavouriteClickLaptop
          }
        />
      );
    });
  };
  const toggleSubmitMessage = () => {
    setShowSubmitMessage(!showSubmitMessage);
  };

  if (addedLaptops.length + addedPhones.length === 0) {
    return <p>No items are in the cart.</p>;
  }

  return (
    <>
      <ul>{renderItems(addedLaptops)}</ul>
      <ul>{renderItems(addedPhones)}</ul>
      <p>
        Total purchase :{" "}
        {calculateTotalPurchase([...addedLaptops, ...addedPhones])}
      </p>
      <button type="button" onClick={onReset}>
        Reset Cart
      </button>
      <button onClick={toggleSubmitMessage}>Submit</button>
      {showSubmitMessage && (
        <div>
          <p>Order submitted ! Unfortunately this isn't an actual shop</p>
          <button onClick={toggleSubmitMessage}>X</button>
        </div>
      )}
    </>
  );
}
