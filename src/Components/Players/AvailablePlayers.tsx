import React from 'react';
import type { IPlayer } from '../../Types/PlayerType';
import { FaRegUser } from 'react-icons/fa';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({players}) => {
    // console.log(players);
    return (
        <div className='grid grid-cols-3 gap-4 mt-6'>
            {
        players.map((player: IPlayer) => {
            return (
               <PlayerCard key={player.id} player = {player}></PlayerCard>
            )
        })
            }
        </div>
    );
};

export default AvailablePlayers;