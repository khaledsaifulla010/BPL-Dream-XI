import { RiDeleteBinFill } from "react-icons/ri";

import PropTypes from "prop-types";

const SelectedPlayerCard = ({ selectedPlayer, removePlayer }) => {
  const { id, name, image, role, price } = selectedPlayer;
  return (
    <div>
      <div className="card bg-base-100 w-[1030px] border-2 mt-24">
        <div className="card-body ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 ">
              <img className="w-40 h-40 rounded-full border-2" src={image} />
              <div>
                <h1 className="text-3xl font-black ">{name}</h1>
                <h2 className="text-xl font-bold text-slate-500 mt-2 ml-1">
                  {role}
                </h2>
              </div>
            </div>
            <div>
              <button onClick={() => removePlayer(id, price)}>
                <RiDeleteBinFill className=" text-3xl text-red-600"></RiDeleteBinFill>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectedPlayerCard.propTypes = {
  selectedPlayer: PropTypes.object.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayerCard;
