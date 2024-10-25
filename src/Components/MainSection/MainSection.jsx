import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
import "./MainSection.css";

const MainSection = ({ handleIsActiveState, isActive }) => {
  return (
    <div className="flex items-center justify-between mt-16 px-4">
      <div>
        {isActive.availability ? (
          <AvailablePlayers></AvailablePlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
      <div>
        <button
          dir="ltr"
          className={`${
            isActive.availability
              ? "border-2 border-lime-400 p-3  font-black text-lg rounded-s-lg  active "
              : "border-2 border-lime-400 p-3  font-black text-lg rounded-s-lg "
          }`}
          onClick={() => handleIsActiveState("availability")}
        >
          Available
        </button>
        <button
          dir="rtl"
          className={`${
            isActive.availability
              ? "border-2 p-3  font-black text-lg rounded-s-lg  border-lime-400"
              : "border-2  p-3  font-black text-lg rounded-s-lg  active border-lime-400"
          }`}
          onClick={() => handleIsActiveState("selected")}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default MainSection;
