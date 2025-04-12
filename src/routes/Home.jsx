import { useOutletContext } from "react-router-dom";
import { getRandomItems } from "../util";

export default function Home() {
  const { laptops, phones } = useOutletContext();
  if (phones.isLoadingPhones || laptops.isLoadingLaptops)
    return <p>loading ...</p>;
  const items = getRandomItems(
    [...laptops.laptopsData, ...phones.phonesData],
    3
  );
  return (
    <>
      <h2>Hey this is home.</h2>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </li>
      ))}
    </>
  );
}
