import { Outlet } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import NavBar from "./components/NavBar";

export default function Layout() {
  const {
    data: phonesData,
    isLoading: isLoadingPhones,
    error: phonesDataError,
    setData: setPhonesData,
  } = useFetch("https://dummyjson.com/products/category/smartphones?limit=6");
  const {
    data: laptopsData,
    isLoading: isLoadingLaptops,
    error: laptopsDataError,
    setData: setLaptopsData,
  } = useFetch("https://dummyjson.com/products/category/laptops");

  const handleAddClick = (id, amount, data, setData) => {
    if (!data) return;
    setData(
      data.map((product) =>
        product.id !== id
          ? product
          : {
              ...product,
              isAdded: !product.isAdded,
              amount: product.isAdded ? 1 : amount,
            }
      )
    );
  };

  const handleAddClickPhone = (id, amount) => {
    handleAddClick(id, amount, phonesData, setPhonesData);
  };
  const handleAddClickLaptop = (id, amount) => {
    handleAddClick(id, amount, laptopsData, setLaptopsData);
  };

  const handleFavouriteClick = (id, data, setData) => {
    setData(
      data.map((product) => {
        return product.id === id
          ? { ...product, isFavourite: !product.isFavourite }
          : product;
      })
    );
  };
  const handleFavouriteClickPhone = (id) => {
    handleFavouriteClick(id, phonesData, setPhonesData);
  };
  const handleFavouriteClickLaptop = (id) => {
    handleFavouriteClick(id, laptopsData, setLaptopsData);
  };
  const handleResetCategory = (category, setCategory) => {
    setCategory(
      category.map((product) => ({ ...product, amount: 1, isAdded: false }))
    );
  };
  const handleResetCart = () => {
    handleResetCategory(phonesData, setPhonesData);
    handleResetCategory(laptopsData, setLaptopsData);
  };
  return (
    <>
      <NavBar />
      <Outlet
        context={{
          phones: {
            phonesData,
            phonesDataError,
            isLoadingPhones,
            handleAddClickPhone,
            handleFavouriteClickPhone,
          },
          laptops: {
            laptopsData,
            laptopsDataError,
            isLoadingLaptops,
            handleAddClickLaptop,
            handleFavouriteClickLaptop,
          },
          onReset: handleResetCart,
        }}
      />
      <hr />
    </>
  );
}
