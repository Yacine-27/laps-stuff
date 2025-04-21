import { useOutletContext } from "react-router-dom";

import Items from "../components/Items";
import ShopFilter from "../components/ShopFilter";
import SearchBar from "../components/SearchBar";
import { getMatchedItems } from "../util";
import { useState } from "react";

export default function Shop() {
  const { phones, laptops } = useOutletContext();
  const [showProducts, setShowProducts] = useState({
    phones: true,
    laps: true,
  });
  const [searchWord, setSearchWord] = useState("");
  const handleSearchWordChange = (e) => {
    setSearchWord(e.target.value);
  };
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
    <div className="bg-slate-950 text-white flex flex-col p-3 min-h-screen">
      <SearchBar
        searchWord={searchWord}
        onSearchWordChange={handleSearchWordChange}
      />

      <ShopFilter
        showPhones={showProducts.phones}
        showLaps={showProducts.laps}
        onToggle={handleToggleFilter}
      />
      {showProducts.phones && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl mb-2">Phones:</h1>
          <Items
            data={matchedPhones}
            error={phones.phonesDataError}
            isLoading={phones.isLoadingPhones}
            onAddClick={phones.handleAddClickPhone}
            onFavClick={phones.handleFavouriteClickPhone}
          />{" "}
        </div>
      )}

      {showProducts.laps && (
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold mt-3">Laptops</h1>
          <Items
            data={matchedLaptops}
            error={laptops.laptopsDataError}
            isLoading={laptops.isLoadingLaptops}
            onAddClick={laptops.handleAddClickLaptop}
            onFavClick={laptops.handleFavouriteClickLaptop}
          />
        </div>
      )}
    </div>
  );
}
