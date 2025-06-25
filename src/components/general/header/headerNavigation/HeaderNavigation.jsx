import { NavLink } from "react-router-dom";
import "./HeaderNavigation.css";

const Navigation = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Main page</NavLink>
      </li>
      <li>
        <NavLink to="/userList">User list</NavLink>
      </li>
      <li>
        <NavLink to="/placeList">Places list</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
