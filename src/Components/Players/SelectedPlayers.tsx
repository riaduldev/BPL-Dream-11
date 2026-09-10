import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../Types/PlayerType";
import PlayerCard from "./PlayerCard";
import { TbTrash } from "react-icons/tb";
import SelectedPlayerCard from "./SelectedPlayerCard";


interface IPlayerCardProps {
    selectedPlayers: IPlayer[];
        setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
        coin: number;
    setCoin: Dispatch<SetStateAction<number>>;

}



const SelectedPlayers = ({selectedPlayers, setSelectedPlayers,coin, setCoin}: IPlayerCardProps) => {

  
    if(selectedPlayers.length === 0) {
        return (
            <h2 className="font-bold text-3xl my-10 text-center text-red-500">No selected players</h2>
        )
    }
    return (
        <div className="grid grid-cols-1 gap-7 mt-6">
            {
                selectedPlayers.map((player: IPlayer) => {
                    return (<SelectedPlayerCard coin={coin} setCoin={setCoin} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} key={player.id}></SelectedPlayerCard> 
                    );
                })};
                </div>
    );
};

export default SelectedPlayers;