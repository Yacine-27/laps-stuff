import { useOutletContext } from "react-router-dom";

import Items from "../components/Items";

export default function Shop() {
  const { phones, laptops } = useOutletContext();
  return (
    <div>
      <h1>Phones</h1>
      <Items
        data={phones.phonesData}
        error={phones.phonesDataError}
        isLoading={phones.isLoadingPhones}
        onAddClick={phones.handleAddClickPhone}
        onFavClick={phones.handleFavouriteClickPhone}
      />

      <hr />
      <h1>Laptops</h1>
      <Items
        data={laptops.laptopsData}
        error={laptops.laptopsDataError}
        isLoading={laptops.isLoadingLaptops}
        onAddClick={laptops.handleAddClickLaptop}
        onFavClick={laptops.handleFavouriteClickLaptop}
      />
    </div>
  );
}
