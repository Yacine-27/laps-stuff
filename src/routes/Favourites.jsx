import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

export default function Favourites() {
  const { phones, laptops } = useOutletContext();
  if (!phones.phonesData || !laptops.laptopsData) return <p>loading ...</p>;
  const favPhones = phones.phonesData.filter((phone) => phone.isFavourite);
  const favLaps = laptops.laptopsData.filter((lap) => lap.isFavourite);
  if (favLaps.length + favPhones.length === 0)
    return (
      <div className="bg-slate-900  min-h-screen text-center pt-2">
        <p className="text-xl font-semibold text-slate-300">
          No Items are added as favourites yet.{" "}
        </p>
      </div>
    );
  return (
    <div className="bg-slate-900 text-white min-h-screen px-2">
      {favPhones.length > 0 && (
        <div className="flex flex-col gap-3 p-2">
          {" "}
          <h3 className="text-xl font-bold">Fav Phones:</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {favPhones.map((phone) => (
              <Card
                key={phone.id}
                id={phone.id}
                title={phone.title}
                price={phone.price}
                image={phone.image}
                isAdded={phone.isAdded}
                isFavourite={phone.isFavourite}
                initialAmount={phone.amount}
                onAddClick={phones.handleAddClickPhone}
                onFavClick={phones.handleFavouriteClickPhone}
              />
            ))}
          </ul>
        </div>
      )}
      {favLaps.length > 0 && (
        <div className="flex flex-col gap-3 p-2">
          {" "}
          <h3 className="text-xl font-bold">Fav Laps:</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {favLaps.map((lap) => (
              <Card
                key={lap.id}
                id={lap.id}
                title={lap.title}
                price={lap.price}
                image={lap.image}
                isAdded={lap.isAdded}
                isFavourite={lap.isFavourite}
                initialAmount={lap.amount}
                onAddClick={laptops.handleAddClickLaptop}
                onFavClick={laptops.handleFavouriteClickLaptop}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
