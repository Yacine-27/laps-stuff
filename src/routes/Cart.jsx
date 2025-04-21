import { useOutletContext } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPriceFormat } from "../util";
import { Transition } from "@headlessui/react";

export default function Cart() {
  const { phones, laptops, onReset } = useOutletContext();
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const addedItems = (array) => {
    if (!array) return [];
    return array.filter((item) => {
      return item.isAdded;
    });
  };
  const addedLaptops = addedItems(laptops.laptopsData);
  const addedPhones = addedItems(phones.phonesData);
  const calculateOneItem = (item) => {
    return item.price * item.amount;
  };
  const calculateTotalPurchase = (items) => {
    const amount = items.reduce((prev, curr) => {
      return prev + calculateOneItem(curr);
    }, 0);
    return getPriceFormat(amount, "EGP", 50.3);
  };

  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <CartProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          amount={item.amount}
          onAddClick={
            item.category === "phones"
              ? phones.handleAddClickPhone
              : laptops.handleAddClickLaptop
          }
          onChangeAmount={
            item.category === "phones"
              ? phones.handleChangeAmountPhone
              : laptops.handleChangeAmountLaptop
          }
        />
      );
    });
  };

  const toggleSubmitMessage = () => {
    if (!showSubmitMessage) onReset();
    setShowSubmitMessage(!showSubmitMessage);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col gap-4 p-2 items-center">
      {addedLaptops.length + addedPhones.length === 0 && !showSubmitMessage ? (
        <>
          <p className="text-xl font-semibold text-slate-300 mt-5 text-center">
            No items are added to the cart yet. Go to{" "}
            <Link
              to={"../shop"}
              className="text-white font-bold hover:underline"
            >
              Shop
            </Link>{" "}
            to find a product you like.
          </p>
        </>
      ) : (
        <>
          {!showSubmitMessage && (
            <>
              <h1 className="text-2xl font-bold self-start">Cart Products: </h1>
              <ul className="flex flex-col gap-3 p-2 ">
                {renderItems([...addedLaptops, ...addedPhones])}
              </ul>
              <p className="text-xl font-bold">
                Total purchase :{" "}
                {calculateTotalPurchase([...addedLaptops, ...addedPhones])}
              </p>
              <div className="flex gap-4 items-center">
                <button
                  onClick={toggleSubmitMessage}
                  className="bg-violet-800 p-2 rounded-xl text-xl font-bold hover:bg-violet-900 cursor-pointer"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  className=" bg-red-500 p-1 font-semibold rounded-md hover:bg-red-600 cursor-pointer"
                >
                  Reset Cart
                </button>
              </div>
            </>
          )}

          <Transition
            show={showSubmitMessage}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex gap-2 text-xl font-semibold text-slate-300 bg-slate-600 p-4 rounded-2xl items-center">
              <p>Order submitted ! Unfortunately this isn't an actual shop.</p>
              <button
                onClick={toggleSubmitMessage}
                className="bg-slate-300 text-gray-800 cursor-pointer py-1 px-2 rounded-xl hover:bg-slate-500 hover:text-white"
              >
                X
              </button>
            </div>
          </Transition>
        </>
      )}
    </div>
  );
}
