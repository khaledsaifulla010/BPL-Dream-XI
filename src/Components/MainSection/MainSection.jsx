import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
import "./MainSection.css";

import PropTypes from "prop-types";

const MainSection = ({
  handleIsActiveState,
  isActive,
  players,
  handleSelectPlayer,
  select,
  setSelect,
  coins,
  setCoins,
}) => {
  return (
    <div className="flex  justify-between mt-24 w-[1350px] gap-8 px-4">
      <div className="w-[1100px]">
        {isActive.availability ? (
          <AvailablePlayers
            players={players}
            handleSelectPlayer={handleSelectPlayer}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            select={select}
            setSelect={setSelect}
            coins={coins}
            setCoins={setCoins}
          ></SelectedPlayers>
        )}
      </div>

      <div className="w-[300px]">
        <button
          dir="ltr"
          className={`${
            isActive.availability
              ? "border-2 border-lime-400 p-3  font-black text-lg rounded-s-lg  active sticky top-20 z-10"
              : "border-2 border-lime-400 p-3  font-black text-lg rounded-s-lg sticky top-20 z-10 "
          }`}
          onClick={() => handleIsActiveState("availability")}
        >
          Available
        </button>
        <button
          dir="rtl"
          className={`${
            isActive.availability
              ? "border-2 p-3  font-black text-lg rounded-s-lg  border-lime-400 sticky top-20 z-10"
              : "border-2  p-3  font-black text-lg rounded-s-lg  active border-lime-400 sticky top-20 z-10"
          }`}
          onClick={() => handleIsActiveState("selected")}
        >
          ({select.length})Selected
        </button>
      </div>
    </div>
  );
};

MainSection.propTypes = {
  handleIsActiveState: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  players: PropTypes.object.isRequired,
  handleSelectPlayer: PropTypes.func.isRequired,
  select: PropTypes.array.isRequired,
  setSelect: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
  setCoins: PropTypes.func.isRequired,
};

export default MainSection;
