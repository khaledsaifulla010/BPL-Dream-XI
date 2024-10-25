import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({ select, setSelect, coins,setCoins }) => {
  const redirectToAvailablePlayers = () => [
    (window.location.href = "/index.html"),
  ];

  const removePlayer = (id, price) => {
    const updatedSelect = select.filter((player) => player.id !== id);
    setSelect(updatedSelect);
    setCoins(coins + price)
  };

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
            removePlayer={removePlayer}
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
