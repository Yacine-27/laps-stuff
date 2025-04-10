import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { phones, laptops } = useOutletContext();
  const addedItems = (array) => {
    if (!array) return [];
    return array.filter((item) => {
      return item.isAdded;
    });
  };
  const addedLaptops = addedItems(laptops.laptopsData);
  const addedPhones = addedItems(phones.phonesData);
  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.amount}</p>
          <p>{item.price}</p>
        </li>
      );
    });
  };

  return (
    <>
      <ul>{renderItems(addedLaptops)}</ul>
      <ul>{renderItems(addedPhones)}</ul>
    </>
  );
}
