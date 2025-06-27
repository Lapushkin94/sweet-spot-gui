import Card from "../UIElements/Card";
import User from "./User";
import "./UserList.css";

const UsersList = (props) => {
  if (!props.items || props.items.length === 0) {
    return (
      <div className="no-users">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <User
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placesNumber={user.placesNumber}
        />
      ))}
    </ul>
  );
};

export default UsersList;
