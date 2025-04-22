import { useParams, useOutletContext } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import Recommendations from "../components/Recommendations";
import { getPriceFormat, getRandomItems } from "../util";
import { useState } from "react";

export default function Item() {
  const [amount, setAmount] = useState(1);
  const { phones, laptops } = useOutletContext();
  const { id } = useParams();
  if (!phones.phonesData || !laptops.laptopsData) return <Spinner />;
  const items = [...phones.phonesData, ...laptops.laptopsData];
  const item = items.find((item) => item.id === Number(id));
  if (!item)
    return (
      <div className="bg-slate-950 min-h-screen text-center">
        <p className="pt-3 text-xl font-semibold text-slate-300">
          This item does not exist.
        </p>
      </div>
    );
  const handleAddClick = () => {
    if (item.category === "phones") phones.handleAddClickPhone(item.id, amount);
    else if (item.category === "laptops")
      laptops.handleAddClickLaptop(item.id, amount);
  };
  const handleFavClick = () => {
    if (item.category === "phones") phones.handleFavouriteClickPhone(item.id);
    else if (item.category === "laptops")
      laptops.handleFavouriteClickLaptop(item.id);
  };

  const getRecommenations = () => {
    const data = (
      item.category === "phones" ? phones.phonesData : laptops.laptopsData
    ).filter((i) => i.id !== item.id);
    return getRandomItems(data, 3);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-start">
      <BackButton />
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2 pt-4 pl-4 ">
        <img
          src={item.image}
          alt={item.title}
          className="max-w-70 max-h-70 bg-slate-600 rounded-xl lg:max-w-100 lg:max-h-100"
        />
        <div className="flex flex-col gap-1 h-full text-center sm:text-start">
          {" "}
          <p className="font-bold text-xl ">{item.title}</p>
          <p className="text-slate-300">{item.description}</p>
          <p className="text-xl font-semibold pt-3">
            Price: {getPriceFormat(item.price, "EGP", 50.3)}
          </p>
          <div className="mt-auto">
            <div className="flex self-center pt-3 gap-3  items-center mb-3 pb-2 sm:pb-0 justify-center">
              <button
                className="bg-violet-700 py-1 px-3 rounded-lg text-xl font-semibold hover:bg-violet-800 cursor-pointer"
                onClick={() => {
                  if (amount > 1) setAmount(amount - 1);
                }}
              >
                -
              </button>
              <p className="text-xl font-semibold"> Amount : {amount}</p>
              <button
                className="bg-violet-700 py-1 px-3 rounded-lg text-xl font-semibold hover:bg-violet-800 cursor-pointer"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="flex mb-3 justify-center gap-3">
              <button
                onClick={handleAddClick}
                className="bg-violet-800 p-2 rounded font-semibold hover:bg-violet-950 cursor-pointer"
              >
                {item.isAdded ? "Remove from Cart" : "Add to Cart"}
              </button>
              <button
                className="bg-violet-800 p-2 rounded font-semibold hover:bg-violet-950 cursor-pointer"
                onClick={handleFavClick}
              >
                {item.isFavourite ? "Remove from" : "Add to"} Favs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Recommendations
        recommendations={getRecommenations()}
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
    </div>
  );
}
