
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 bg-gray-200 flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/timeline">Timeline</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    </div>
  );
};

export default Navbar;