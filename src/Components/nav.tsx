import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Nav = ({coin}: {coin: number}) => {
  
  return (
    <nav className="bg-red-100">
      <div className="container mx-auto flex justify-between">
        <img src={Logo} alt="" />
        <ul className="flex gap-4 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Players</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
        </ul>
        <h2 className="font-bold text-3xl text-black flex gap-1 items-center"><AiFillDollarCircle />{coin}</h2>
      </div>
    </nav>
  );
};

export default Nav;
