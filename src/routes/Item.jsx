import { useParams, useOutletContext } from "react-router-dom";

export default function Item() {
  const { phones, laptops } = useOutletContext();
  const { id } = useParams();
  if (!phones.phonesData || !laptops.laptopsData) return <p>loading...</p>;
  const items = [...phones.phonesData, ...laptops.laptopsData];
  const item = items.find((item) => item.id === Number(id));
  if (!item) return <p>This item doesn't exist</p>;
  const handleAddClick = () => {
    if (item.category === "phones")
      phones.handleAddClickPhone(item.id, item.amount);
    else if (item.category === "laptops")
      laptops.handleAddClickLaptop(item.id, item.amount);
  };
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <button onClick={handleAddClick}>
        {item.isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
