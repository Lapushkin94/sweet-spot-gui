import { NavLink } from "react-router-dom";
import "./HeaderNavigation.css";
import { useContext } from "react";
import { AuthContext } from "../../../utils/AuthContext";

const Navigation = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Main page</NavLink>
      </li>
      <li>
        <NavLink to="/users">User list</NavLink>
      </li>
      <li>
        <NavLink to="/places" end>
          Places list
        </NavLink>
      </li>
      {/* TODO: add current user id for show "my places" */}
      {/* <li>
        <NavLink to="/myPlaces">My places</NavLink>
      </li> */}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new" end>
            Add place
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/authentication">Authentication</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button className="logout-button" onClick={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
