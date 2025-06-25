import Navigation from "./headerNavigation/HeaderNavigation";
import HeaderWrapper from "./headerWrapper/HeaderWrapper";
import "./Header.css";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="header-title">Sweet spot</h1>
      <nav>
        <Navigation />
      </nav>
    </HeaderWrapper>
  );
};

export default Header;