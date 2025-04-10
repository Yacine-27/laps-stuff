import { Link, Outlet } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function Layout() {
  const {
    data: phonesData,
    isLoading: isLoadingPhones,
    error: phonesDataError,
    setData: setPhonesData,
  } = useFetch("https://dummyjson.com/products/category/smartphones?limit=2");
  const {
    data: laptopsData,
    isLoading: isLoadingLaptops,
    error: laptopsDataError,
    setData: setLaptopsData,
  } = useFetch("https://dummyjson.com/products/category/laptops?limit=2");
  const handleSelection = (id, amount, data, setData) => {
    if (!data) return;
    setData(
      data.map((product) =>
        product.id !== id
          ? product
          : {
              ...product,
              isAdded: true,
              amount: amount,
            }
      )
    );
  };
  const handleRemoval = (id, data, setData) => {
    setData(
      data.map((product) =>
        product.id !== id ? product : { ...product, isAdded: false, amount: 1 }
      )
    );
  };

  const handlePhoneSelection = (id, amount) => {
    handleSelection(id, amount, phonesData, setPhonesData);
  };
  const handleLaptopSelection = (id, amount) => {
    handleSelection(id, amount, laptopsData, setLaptopsData);
  };
  const handlePhoneRemoval = (id) => {
    handleRemoval(id, phonesData, setPhonesData);
  };
  const handleLaptopRemoval = (id) => {
    handleRemoval(id, laptopsData, setLaptopsData);
  };
  return (
    <>
      <header>
        <Link to={""}>Home</Link>
        <Link to={"shop"}>Shop</Link>
        <Link to={"cart"}>Cart</Link>
        <Link to={"favourites"}>Favs</Link>
      </header>
      <hr />
      <Outlet
        context={{
          phones: {
            phonesData,
            phonesDataError,
            isLoadingPhones,
            handlePhoneSelection,
            handlePhoneRemoval,
          },
          laptops: {
            laptopsData,
            laptopsDataError,
            isLoadingLaptops,
            handleLaptopSelection,
            handleLaptopRemoval,
          },
        }}
      />
      <hr />
      <footer>
        <h1>A Footer</h1>
      </footer>
    </>
  );
}
