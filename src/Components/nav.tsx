import Logo from "../assets/logo.png";

const Nav = () => {
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
      </div>
    </nav>
  );
};

export default Nav;
