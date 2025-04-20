import { useOutletContext } from "react-router-dom";
import { getRandomItems } from "../util";
import Header from "../components/Header";
import TopPicks from "../components/TopPicks";
import Spinner from "../components/Spinner";

export default function Home() {
  const { phones, laptops } = useOutletContext();
  const isLoadingPicks = phones.isLoadingPhones || laptops.isLoadingLaptops;
  const topPicks = isLoadingPicks
    ? null
    : [
        ...getRandomItems(laptops.laptopsData, 2),
        ...getRandomItems(phones.phonesData),
      ];
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />
      {isLoadingPicks ? (
        <Spinner />
      ) : (
        <TopPicks
          topPicks={topPicks}
          isLoadingPicks={isLoadingPicks}
          handleAddPhone={phones.handleAddClickPhone}
          handleAddLaptop={laptops.handleAddClickLaptop}
          handleFavouriteClickPhone={phones.handleFavouriteClickPhone}
          handleFavouriteClickLaptop={laptops.handleFavouriteClickLaptop}
        />
      )}
    </div>
  );
}
