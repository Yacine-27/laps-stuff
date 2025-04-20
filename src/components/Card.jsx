import { useState } from "react";
import { Link } from "react-router-dom";
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
      {!isAdded && isFormOpen && (
        <ProductForm id={id} onAddClick={onAddClick} price={price} />
      )}

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
