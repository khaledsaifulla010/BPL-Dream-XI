import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({ select }) => {
  const { id } = select;

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
    </div>
  );
};

export default SelectedPlayers;
