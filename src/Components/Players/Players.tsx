import { use } from "react";
import type { IPlayer } from "../../Types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProp {
    playersPromise: Promise<IPlayer[]>
}
const Players = ({playersPromise}: PlayersProp) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(play ers);
    return (
        <div className="container mx-auto">
        <div className="flex justify-between gap-4 mb-2">
            <h2 className="font-black text-xl">Available Players</h2>
            <div>
                <button className="btn btn-success">Available</button>
                <button className="btn">Selected</button>
            </div>
        </div>

            <AvailablePlayers players= {players}></AvailablePlayers>
        </div>
    );
};

export default Players;