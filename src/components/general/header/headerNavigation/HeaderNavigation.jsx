import { NavLink } from "react-router-dom";
import "./HeaderNavigation.css";

const Navigation = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Main page</NavLink>
      </li>
      <li>
        <NavLink to="/users">User list</NavLink>
      </li>
      <li>
        <NavLink to="/places">Places list</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
