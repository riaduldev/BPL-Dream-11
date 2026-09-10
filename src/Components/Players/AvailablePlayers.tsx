import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../Types/PlayerType';
import { FaRegUser } from 'react-icons/fa';
import PlayerCard from './PlayerCard';
import type { StreamState } from 'http2';

interface IAvailableProps{
    players: IPlayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>
}

const AvailablePlayers = ({players, coin, setCoin , selectedPlayers, setSelectedPlayers}: IAvailableProps) => {
    // console.log(players);
    
    return (
        <div className='grid grid-cols-3 gap-4 mt-6'>
            {
        players.map((player: IPlayer) => {
            return (
               <PlayerCard coin={coin} setCoin={setCoin} key={player.id} player = {player} selectedPlayers= {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}></PlayerCard>
            )
        })
            }
        </div>
    );
};

export default AvailablePlayers;