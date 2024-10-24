import logo from "../../../assets/images/logo.png";
import coin from "../../../assets/images/coin-logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-20 mt-8">
        <div className="navbar-start">
          <img src={logo} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="border-2 p-4 rounded-lg h-12  font-black text-xl flex items-center gap-2">
            0 Coin <img className="w-5 mt-1" src={coin} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
