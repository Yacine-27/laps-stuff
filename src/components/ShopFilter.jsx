import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function ShopFilter({ showPhones, showLaps, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggle = (e) => {
    onToggle(e.target.id);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target));
      {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="flex flex-col gap-3 self-center" ref={dropdownRef}>
      <button
        type="button"
        className="p-2 mt-5 bg-slate-800 font-semibold rounded-lg cursor-pointer hover:bg-violet-950"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Filter Products
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col bg-slate-700 p-2 rounded">
          <div className="filter-widget">
            <label htmlFor="phones" className="filter-widget-label">
              Phones
            </label>
            <input
              type="checkbox"
              name="phones"
              id="phones"
              checked={showPhones}
              onChange={handleToggle}
            />
          </div>
          <div className="filter-widget">
            <label htmlFor="laps" className="filter-widget-label">
              Laps
            </label>
            <input
              type="checkbox"
              name="laps"
              id="laps"
              checked={showLaps}
              onChange={handleToggle}
            />
          </div>
        </div>
      </Transition>
    </div>
  );
}
