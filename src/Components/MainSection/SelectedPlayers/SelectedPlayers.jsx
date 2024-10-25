import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({ select }) => {
  const redirectToAvailablePlayers = () => [
    (window.location.href = "/index.html"),
  ];

  return (
    <div>
      <h1 className="text-3xl font-black">
        Selected Players({select.length}/6)
      </h1>
      <div>
        {select.map((selectedPlayer) => (
          <SelectedPlayerCard
            key={selectedPlayer.id}
            selectedPlayer={selectedPlayer}
          ></SelectedPlayerCard>
        ))}
      </div>
      <button
        onClick={redirectToAvailablePlayers}
        className="border-2 p-3 rounded-xl mt-12 bg-lime-400 font-bold text-lg"
      >
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayers;
