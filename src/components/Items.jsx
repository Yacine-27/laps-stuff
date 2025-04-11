import Card from "./Card";

export default function Items({
  data,
  error,
  isLoading,
  onAddClick,
  onFavClick,
}) {
  if (isLoading || !data) return <p>loading...</p>;
  if (error) return <p>An errror occured {error}</p>;
  return (
    <ul>
      {data.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          initialAmount={product.amount}
          isAdded={product.isAdded}
          isFavourite={product.isFavourite}
          onAddClick={onAddClick}
          onFavClick={onFavClick}
        />
      ))}
    </ul>
  );
}
