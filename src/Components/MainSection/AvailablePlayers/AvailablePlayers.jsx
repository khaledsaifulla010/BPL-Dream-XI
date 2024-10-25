import AvailablePlayerCard from "./AvailablePlayerCard";

const AvailablePlayers = ({ players, handleSelectPlayer }) => {
  return (
    <div>
      <div id="available-players" className="w-[1000px] space-y-10">
        <h1 className="text-3xl font-black ">AvailablePlayers</h1>

        {/* <h1 className="mt-12">AvailablePlayers : {players.length} </h1> */}

        <div className="w-[1300px] h-[1000px] mt-36 grid grid-cols-3 ">
          {players.map((player) => (
            <AvailablePlayerCard
              key={player.id}
              player={player}
              handleSelectPlayer={handleSelectPlayer}
            ></AvailablePlayerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
