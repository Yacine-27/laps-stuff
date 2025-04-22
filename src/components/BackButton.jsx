import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <IoChevronBackCircleSharp
        size={36}
        className="text-slate-300 mt-2 ml-2 cursor-pointer"
      />
    </button>
  );
}
