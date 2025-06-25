import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
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
