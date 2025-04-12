import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!ignore) {
          if (response.status >= 400) throw new Error("Server Error");
          const json = await response.json();
          setData(
            json.products.map((product) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.images[0],
              category:
                product.category === "smartphones" ? "phones" : "laptops",
              isAdded: false,
              amount: 1,
              isFavourite: false,
            }))
          );
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);
  return { data, setData, isLoading, error };
}
export default useFetch;
