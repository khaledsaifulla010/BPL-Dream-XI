import { GoPersonFill } from "react-icons/go";
import { FaFlag } from "react-icons/fa";

import bat from "../../../assets/images/bat.png";
import bowl from "../../../assets/images/cricket-ball.png";
import rounder from "../../../assets/images/rounder.png";
import gloves from "../../../assets/images/glove.png";
const AvailablePlayerCard = ({ player, handleSelectPlayer }) => {
  const { id, name, image, nationality, role, batsmanType, bowlerType, price } =
    player;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-[400px] h-[600px] border-2 mt-12">
        <figure>
          <img className="w-[300px] mt-4 rounded-xl  h-[250px]" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="flex items-center gap-2 font-black text-xl">
            <GoPersonFill></GoPersonFill> {name}
          </h2>

          <div className="flex items-center justify-between mt-4">
            <h2 className="flex items-center gap-2 text-base font-semibold text-slate-500 ">
              <FaFlag></FaFlag> {nationality}
            </h2>
            <button className="p-2 rounded-lg bg-slate-100 font-bold text-base">
              <img
                src={
                  role === "All-Rounder"
                    ? `${rounder}`
                    : role === "Batsman"
                    ? `${bat}`
                    : role === "Wicketkeeper-Batsman"
                    ? `${gloves}`
                    : role === "Bowler"
                    ? `${bowl}`
                    : "/images/default.png" // Fallback image if no role matches
                }
                alt={role}
                className="w-6 h-6 inline-block mr-2"
              />

              {role}
            </button>
          </div>
          <div className="divider"></div>
          <h1 className="font-bold text-xl ">Rating</h1>

          <div className="flex items-center justify-between mt-4">
            <h1 className="font-bold text-slate-500 text-base flex items-center gap-1">
              <img className="w-5" src={bat} />
              {batsmanType ? batsmanType : "N/A"}
            </h1>
            <h1 className="font-bold text-slate-500 text-base flex items-center gap-1">
              <img className="w-4" src={bowl} />
              {bowlerType ? bowlerType : "N/A"}
            </h1>
          </div>

          <div className="flex items-center justify-between mt-6">
            <h1 className="font-bold text-slate-500 text-base">
              Price : $ {price}
            </h1>
            <button
              onClick={() => handleSelectPlayer(player)}
              className=" p-2 rounded-xl bg-lime-400 font-black"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayerCard;
