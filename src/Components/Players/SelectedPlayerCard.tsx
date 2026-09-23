import { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../Types/PlayerType';
import { TbTrash } from 'react-icons/tb';


interface ISelectedPlayerProps {
    player: IPlayer;
    selectedPlayers: IPlayer[];
            setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
            coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}
const SelectedPlayerCard = ({player,selectedPlayers, setSelectedPlayers, coin, setCoin}:ISelectedPlayerProps) => {
      const handleRemovePlayer = (player:IPlayer) => {
        const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName)
        setSelectedPlayers(restPlayers);

        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice);
    }
    return (
         <div className="flex gap-2 justify-between items-center border border-gray-200 rounded-xl py-2 px-4">
                            <div className="flex gap-2">
                                <img className="h-[60px] w-[60px]" src={player.playerImg} alt="" />
                            <div>
                                <h2>{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                            </div>
                           <span className="text-red-500 font-bold cursor-pointer" onClick={()=> handleRemovePlayer(player)}><TbTrash></TbTrash></span>
                        </div>
                  
    );
};

export default SelectedPlayerCard;