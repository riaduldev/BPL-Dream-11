import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from "../../Types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProp {
    playersPromise: Promise<IPlayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>> 
}
const Players = ({playersPromise, coin, setCoin}: PlayersProp) => {
    const players = use(playersPromise);

    const [buttonType, setButtonType]=useState<"available" | "selected">("available");

    const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);


    const handleUpdateType = (type: "available" | "selected") => {
        setButtonType(type)
    }
    return (
        <div className="container mx-auto">
        <div className="flex justify-between gap-4 mb-2">
            <h2 className="font-black text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
            <div>
                <button onClick={() => handleUpdateType("available")} className={`btn ${buttonType === "available" ? "btn-success" : ''} rounded-r-none`}>Available</button>
                <button onClick={() => handleUpdateType("selected")} className={`btn ${buttonType === "selected" ? "btn-success" : ''} rounded-l-none`}>Selected</button>
            </div>
        </div>

            { buttonType === "available" ?<AvailablePlayers selectedPlayers= {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coin= {coin} setCoin = {setCoin} players= {players}/>:<SelectedPlayers selectedPlayers= {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coin= {coin} setCoin = {setCoin} />}
        </div>
    );
};

export default Players;