import { useOutletContext } from "react-router-dom";

export default function Favourites() {
  const { phones, laptops } = useOutletContext();
  if (!phones.phonesData || !laptops.laptopsData) return <p>loading ...</p>;
  const favPhones = phones.phonesData.filter((phone) => phone.isFavourite);
  const favLaps = laptops.laptopsData.filter((lap) => lap.isFavourite);
  return (
    <div>
      <h3>Fav Phones</h3>
      <ul>
        {favPhones.map((phone) => (
          <li key={phone.id}>
            {" "}
            <p>title : {phone.title} </p>{" "}
          </li>
        ))}
      </ul>
      <h3>Fav Laps</h3>
      <ul>
        {favLaps.map((lap) => (
          <li key={lap.id}>
            {" "}
            <p>title : {lap.title} </p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
