import { useParams, useOutletContext } from "react-router-dom";

export default function Item() {
  const { phones, laptops } = useOutletContext();
  const { id } = useParams();
  if (!phones.phonesData || !laptops.laptopsData)
    return <p>Data is still loading</p>;
  const items = [...phones.phonesData, ...laptops.laptopsData];
  const item = items.find((item) => item.id === Number(id));
  if (!item) return <p>This item doesn't exist</p>;
  return <div>{item.title}</div>;
}
