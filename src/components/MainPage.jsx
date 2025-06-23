import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div>
        <h1>Welcome to the Main Page</h1>
        <p>These are the main options of the application:</p>
      </div>
      <Link to={"/userList"}>
        <div>
          <h2>User List</h2>
          <p>View the list of users.</p>
        </div>
      </Link>
      <Link to={"/placeList"}>
        <div>
          <h2>Place List</h2>
          <p>View the list of places.</p>
        </div>
      </Link>
    </>
  );
};

export default MainPage;
