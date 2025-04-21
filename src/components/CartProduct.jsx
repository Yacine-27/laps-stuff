import { Link } from "react-router-dom";
import { getPriceFormat } from "../util";

export default function CartProduct({
  id,
  title,
  price,
  image,
  amount,
  onAddClick,
  onChangeAmount,
}) {
  const handleAmountIncrease = () => {
    onChangeAmount(id, amount + 1);
  };
  const handleAmountDecrease = () => {
    if (amount > 1) onChangeAmount(id, amount - 1);
    else {
      onAddClick(id, 0);
    }
  };
  return (
    <div className="bg-slate-600 rounded-xl flex flex-col gap-1 p-1 mx-2 lg:w-120 md:w-100">
      <div className=" p-3 flex gap-3 relative">
        <img src={image} alt={title} className="max-w-15 rounded-2xl" />
        <Link
          to={`../item/${id}`}
          className="text-xl font-bold pt-4 hover:underline"
        >
          {" "}
          {title}
        </Link>

        <button
          className="self-center bg-red-500 py-1 px-2 text-md rounded-2xl cursor-pointer hover:bg-red-600 absolute top-2 right-2"
          onClick={() => {
            onAddClick(id, 0);
          }}
        >
          X
        </button>
      </div>
      <div className="flex justify-between pr-8">
        <h2 className="text-xl font-semibold px-1">Amount: </h2>
        <div className="flex gap-4 justify-around items-center">
          <button
            className="py-1 px-2 bg-violet-600 rounded-2xl hover:bg-violet-700 cursor-pointer"
            onClick={handleAmountDecrease}
          >
            {" "}
            -{" "}
          </button>
          <p className="text-xl font-semibold">{amount}</p>
          <button
            className="py-1 px-2 bg-violet-600 rounded-2xl hover:bg-violet-700 cursor-pointer"
            onClick={handleAmountIncrease}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-1">
        <h2 className="text-xl font-bold">Total Purchase: </h2>
        <p className="text-xl font-bold pr-8">
          {getPriceFormat(price, "EGP", 50.3 * amount)}
        </p>
      </div>
    </div>
  );
}
