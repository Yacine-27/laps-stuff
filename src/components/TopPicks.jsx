import Card from "./Card";
export default function TopPicks({
  topPicks,
  handleAddPhone,
  handleAddLaptop,
  handleFavouriteClickPhone,
  handleFavouriteClickLaptop,
}) {
  return (
    <div className="flex flex-col gap-2 items-center px-3">
      <h3 className=" text-2xl font-semibold">Top Picks : </h3>
      <ul className="flex gap-5 flex-wrap justify-center py-4">
        {topPicks.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            isAdded={product.isAdded}
            isFavourite={product.isFavourite}
            initialAmount={product.amount}
            onAddClick={
              product.category === "phones" ? handleAddPhone : handleAddLaptop
            }
            onFavClick={
              product.category === "phones"
                ? handleFavouriteClickPhone
                : handleFavouriteClickLaptop
            }
          />
        ))}
      </ul>
    </div>
  );
}
