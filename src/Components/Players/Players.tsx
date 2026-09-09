import { use } from "react";
import type { IPlayer } from "../../Types/PlayerType";

interface PlayersProp {
    playersPromise: Promise<IPlayer[]>
}
const Players = ({playersPromise}: PlayersProp) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default Players;