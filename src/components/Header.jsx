import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Sweet spot</h1>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
