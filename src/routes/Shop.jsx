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
        onSelection={phones.handlePhoneSelection}
        onRemoval={phones.handlePhoneRemoval}
      />

      <hr />
      <h1>Laptops</h1>
      <Items
        data={laptops.laptopsData}
        error={laptops.laptopsDataError}
        isLoading={laptops.isLoadingLaptops}
        onSelection={laptops.handleLaptopSelection}
        onRemoval={phones.handleLaptopRemoval}
      />
    </div>
  );
}
