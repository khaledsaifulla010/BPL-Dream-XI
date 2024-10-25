const SelectedPlayers = ({ select }) => {
  return (
    <div>
      <h1 className="text-3xl font-black">Selected Players({select.length}/6)</h1>
    </div>
  );
};

export default SelectedPlayers;
