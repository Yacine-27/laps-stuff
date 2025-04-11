import { useOutletContext } from "react-router-dom";

import Items from "../components/Items";
import ShopFilter from "../components/ShopFilter";
import { useState } from "react";

export default function Shop() {
  const { phones, laptops } = useOutletContext();
  const [showProducts, setShowProducts] = useState({
    phones: true,
    laps: true,
  });
  const handleToggleFilter = (category) => {
    setShowProducts({ ...showProducts, [category]: !showProducts[category] });
  };
  return (
    <div>
      <ShopFilter
        showPhones={showProducts.phones}
        showLaps={showProducts.laps}
        onToggle={handleToggleFilter}
      />
      {showProducts.phones && (
        <>
          <h1>Phones</h1>
          <Items
            data={phones.phonesData}
            error={phones.phonesDataError}
            isLoading={phones.isLoadingPhones}
            onAddClick={phones.handleAddClickPhone}
            onFavClick={phones.handleFavouriteClickPhone}
          />{" "}
        </>
      )}

      {showProducts.laps && (
        <>
          {" "}
          <h1>Laptops</h1>
          <Items
            data={laptops.laptopsData}
            error={laptops.laptopsDataError}
            isLoading={laptops.isLoadingLaptops}
            onAddClick={laptops.handleAddClickLaptop}
            onFavClick={laptops.handleFavouriteClickLaptop}
          />
        </>
      )}
      <hr />
    </div>
  );
}
