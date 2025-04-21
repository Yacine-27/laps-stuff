import { getPriceFormat } from "../util";

export default function ProductForm({
  price,
  amount,
  onSubmit,
  onMoreItemClick,
  onLessItemClick,
}) {
  return (
    <form action="" onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex justify-around items-center py-2">
        <button
          type="button"
          className="text-2xl bg-slate-900 rounded-3xl px-4 py-2 cursor-pointer hover:bg-violet-700"
          onClick={() => {
            onLessItemClick(amount);
          }}
        >
          -
        </button>
        <p className="text-xl font-bold"> Amount : {amount}</p>

        <button
          type="button"
          onClick={() => {
            onMoreItemClick(amount);
          }}
          className="text-2xl bg-slate-900 rounded-3xl px-4 py-2 cursor-pointer hover:bg-violet-700"
        >
          +
        </button>
      </div>
      <p className="text-xl text-slate-300">
        Total : <b>{getPriceFormat(price, "EGP", amount * 50.3)}</b>
      </p>
      <button
        type="submit"
        className="self-center bg-violet-800 p-2 rounded-xl text-xl font-bold cursor-pointer hover:bg-violet-950 m-1"
      >
        Add to Cart
      </button>
    </form>
  );
}
