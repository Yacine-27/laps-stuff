import { useMediaQuery } from "react-responsive";
import Card from "./Card";
export default function Recommendations({
  recommendations,
  onAddClick,
  onFavClick,
}) {
  const isLargeScreen = useMediaQuery({ minWidth: 640 });
  return (
    <div className="flex pl-3 pt-3 flex-col gap-2">
      {isLargeScreen && (
        <>
          {" "}
          <h2 className="text-lg font-semibold text-slate-300">
            You might also like:{" "}
          </h2>
          <ul className="flex gap-4 justify-center flex-wrap">
            {recommendations.map((product) => (
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
                isSmall={true}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
