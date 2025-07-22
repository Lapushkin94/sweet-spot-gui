import Card from "../elements/Card";
import Avatar from "../elements/Avatar";
import { Link } from "react-router-dom";
import "./User.css";

const User = (props) => {
  return (
    <li className="user-item">
      <Card className="user-card">
        <Link to={`/${props.id}/places/`}>
          <div className="user-avatar">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-info">
            <h2>{props.name}</h2>
            <h3>
              {props.placesNumber}{" "}
              {props.placesNumber === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default User;
