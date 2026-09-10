import { FaRegUser, FaTrophy } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

import type { IPlayer } from "../../Types/PlayerType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";



interface IPlayerCardProps{
    player: IPlayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>
}




const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  // console.log(isSelected, setIsSelected, "isSelected, setIsSelected");
  // console.log(coin, setCoin, "form available players");

const handleSelectPlayer =()=> {
setIsSelected(true);

const newCoinPrice = coin - player.price;
if(newCoinPrice >= 0) {
setCoin(newCoinPrice);
toast.success(`${player.playerName} is purchased successfully`)
}
else{
  toast.error("Coin is low")
}
//Selected players logic
setSelectedPlayers([...selectedPlayers, player]);

}  
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="badge badge-primary px-4 py-3 font-semibold shadow-lg">
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body gap-4">

        {/* Name */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FaRegUser className="text-primary" />
            {player.playerName}
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            {player.origin}
          </p>
        </div>

        <div className="divider my-0"></div>

        {/* Player Information */}
        <div className="grid grid-cols-2 gap-3">

          {/* Batting */}
          <div className="rounded-xl bg-base-200 p-3">
            <p className="text-xs font-medium text-base-content/50">
              Batting
            </p>
            <p className="mt-1 text-sm font-semibold">
              {player.battingStyle}
            </p>
          </div>

          {/* Bowling */}
          <div className="rounded-xl bg-base-200 p-3">
            <p className="text-xs font-medium text-base-content/50">
              Bowling
            </p>
            <p className="mt-1 text-sm font-semibold">
              {player.bowlingStyle}
            </p>
          </div>

        </div>

        {/* Rating */}
        <div className="flex items-center justify-between rounded-xl border border-base-200 p-3">
          <div className="flex items-center gap-2">
            <FaTrophy className="text-warning" />

            <div>
              <p className="text-xs text-base-content/50">
                Player Rating
              </p>

              <p className="font-bold">
                ⭐ 4.8
              </p>
            </div>
          </div>

          <MdSportsCricket className="text-3xl text-primary/30" />
        </div>

        {/* Price + Button */}
        <div className="mt-2 flex items-center justify-between gap-4">

          <div>
            <p className="text-xs text-base-content/50">
              Price
            </p>

            <h2 className="text-2xl font-extrabold text-primary">
              ${player.price.toLocaleString()}
            </h2>
          </div>

          <button onClick={handleSelectPlayer} className="btn btn-primary rounded-xl px-5 shadow-md transition hover:scale-105" //disabled = {isSelected ? true : false}
          disabled = {isSelected}
            >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;