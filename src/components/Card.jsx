import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import ProductForm from "./ProductForm";

import { getPriceFormat } from "../util";

export default function Card({
  id,
  title,
  price,
  isAdded,
  isFavourite,
  onAddClick,
  onFavClick,
  image,
}) {
  const [isFormOpen, setFormOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddClick(id, amount);
    setFormOpen(false);
  };

  const handleMoreItemClick = (amount) => {
    setAmount(amount + 1);
  };

  const handleLessItemClick = (amount) => {
    if (amount > 1) setAmount(amount - 1);
  };

  return (
    <li
      id={id}
      className="flex flex-col rounded-xl shadow-lg bg-slate-800 w-70 p-2 justify-around"
    >
      <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-slate-700 rounded-xl">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <Link to={`../item/${id}`} className="self-center">
        <h4 className="py-3 text-2xl font-semibold hover:underline">{title}</h4>
      </Link>

      {!isFormOpen && (
        <p className="text-xl">
          Price: <b>{getPriceFormat(price, "EGP", 50.3)}</b>
        </p>
      )}

      <Transition
        show={!isAdded && isFormOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          <ProductForm
            price={price}
            amount={amount}
            onSubmit={handleSubmit}
            onMoreItemClick={handleMoreItemClick}
            onLessItemClick={handleLessItemClick}
          />
        </div>
      </Transition>

      <div className="flex justify-center py-2 gap-4">
        {isAdded ? (
          <button
            type="button"
            className="btn"
            onClick={() => {
              onAddClick(id, 0);
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setFormOpen(!isFormOpen);
            }}
          >
            {isFormOpen ? "Cancel" : "Add to cart"}
          </button>
        )}
        <button
          type="button"
          className="btn"
          onClick={() => {
            onFavClick(id);
          }}
        >
          {isFavourite ? "Remove from favs" : "Add to favs"}
        </button>
      </div>
    </li>
  );
}
