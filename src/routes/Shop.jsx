import { useOutletContext } from "react-router-dom";

import Items from "../components/Items";
import ShopFilter from "../components/ShopFilter";
import { getMatchedItems } from "../util";
import { useState } from "react";

export default function Shop() {
  const { phones, laptops } = useOutletContext();
  const [showProducts, setShowProducts] = useState({
    phones: true,
    laps: true,
  });
  const [searchWord, setSearchWord] = useState("");
  const handleToggleFilter = (category) => {
    setShowProducts({ ...showProducts, [category]: !showProducts[category] });
  };
  let matchedPhones, matchedLaptops;
  if (!phones.isLoadingPhones) {
    matchedPhones = getMatchedItems(searchWord, phones.phonesData);
  }
  if (!laptops.isLoadingLaptops) {
    matchedLaptops = getMatchedItems(searchWord, laptops.laptopsData);
  }
  return (
    <>
      <div>
        <label htmlFor="search">Search Products: </label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </div>
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
              data={matchedPhones}
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
              data={matchedLaptops}
              error={laptops.laptopsDataError}
              isLoading={laptops.isLoadingLaptops}
              onAddClick={laptops.handleAddClickLaptop}
              onFavClick={laptops.handleFavouriteClickLaptop}
            />
          </>
        )}
        <hr />
      </div>
    </>
  );
}
