import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";
export default function NavBar() {
  return (
    <nav
      className="sticky top-0 flex justify-between p-2
     bg-slate-900 text-slate-300 "
    >
      <Link to={""} className="nav-element flex gap-2 items-center">
        <FaLaptop size={28} />
        <p className="font-semibold text-xl">Lap & Stuff</p>
      </Link>
      <div className="flex gap-2 items-center">
        <Link to={"shop"} className="nav-element">
          Shop
        </Link>
        <Link to={"cart"} className="nav-element">
          Cart
        </Link>
        <Link to={"favourites"} className="nav-element">
          Favs
        </Link>
      </div>
    </nav>
  );
}
