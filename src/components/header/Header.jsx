import { Link } from "react-router-dom";

import Navigation from "./headerNavigation/HeaderNavigation";
import HeaderWrapper from "./headerWrapper/HeaderWrapper";
import ssLogo from "../../utils/ss-header.png";
import "./Header.css";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/" className="header-link">
        <img src={ssLogo} alt="Sweet spot" className="header-image" />
      </Link>
      <nav className="header-nav">
        <Navigation />
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
