import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-container">
      <p className="banner-text">
        “Your favorite places, shared with your favorite people.”
      </p>
      <div className="circle-container">
        <Link to="/placeList" className="circle circle-left">
          Observe
        </Link>
        {/* TODO: fix the link */}
        <Link to="/" className="circle circle-center">
          Share
        </Link>
        <Link to="/userList" className="circle circle-right">
          Connect
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
