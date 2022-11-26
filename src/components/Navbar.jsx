import { Link } from "react-router-dom";
import Logo from "./assets/pics/Logo.png"
function Navbar() {
  return (
    <div className="navbar shadow-lg bg-[#083045] text-neutral-content justify-center">
      <div className="mx-3">
        <div className="w-1/6 flex items-center">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>
        <div className="flex-1 flex gap-5 justify-end text-4xl uppercase">
          <Link to="/" className="btn btn-ghost rounded-btn hover:border-2 hover:border-white hover:opacity-80">
            home
          </Link>
          <Link to="/post" className="btn btn-ghost rounded-btn hover:border-2 hover:border-white hover:opacity-80">
            post
          </Link>
          <Link to="/register" className="btn btn-ghost rounded-btn hover:border-2 hover:border-white hover:opacity-80">
            register
          </Link>
          <Link to="/login" className="btn btn-ghost rounded-btn hover:border-2 hover:border-white hover:opacity-80">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
