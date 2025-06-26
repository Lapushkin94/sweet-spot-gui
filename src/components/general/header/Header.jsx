import Navigation from "./headerNavigation/HeaderNavigation";
import HeaderWrapper from "./headerWrapper/HeaderWrapper";
import "./Header.css";
import ssLogo from "../../../utils/ss-header.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={ssLogo} alt="Sweet spot" className="header-image"/>
      <nav className="header-nav">
        <Navigation />
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
