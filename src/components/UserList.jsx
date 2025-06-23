import { Link } from "react-router-dom";
import User from "./User";

const UserList = () => {
  const USERS = [
    { id: 1, name: "John Doe", placeNamber: 1 },
    { id: 2, name: "Jane Smith", placeNamber: 2 },
    { id: 3, name: "Alice Johnson", placeNamber: 3 },
    { id: 4, name: "Bob Brown", placeNamber: 4 },
    { id: 5, name: "Charlie Davis", placeNamber: 5 },
  ];

  return (
    <>
      <div>
        <h1>User List</h1>
        <ul>
          {USERS.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              placeNumber={user.placeNamber}
            />
          ))}
        </ul>
      </div>

      <Link to={"/"}>
        <div>
          <h2>Back to Main Page</h2>
          <p>Return to the main page of the application.</p>
        </div>
      </Link>
    </>
  );
};

export default UserList;
