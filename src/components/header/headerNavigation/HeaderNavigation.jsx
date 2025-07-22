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
        <NavLink to="/places" end>Places list</NavLink>
      </li>
      {/* TODO: add current user id for show "my places" */}
      {/* <li>
        <NavLink to="/myPlaces">My places</NavLink>
      </li> */}
      <li>
        <NavLink to="/places/new" end>Add place</NavLink>
      </li>
      <li>
        <NavLink to="/authentication">Authentication</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
