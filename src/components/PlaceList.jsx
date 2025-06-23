import { Link } from "react-router-dom";

const PlaceList = () => {
  return (
    <>
      <div className="place-list">
        <h1>Place List</h1>
        <p>This is the place list component.</p>
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

export default PlaceList;
