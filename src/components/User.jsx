const User = (props) => {
  return (
    <>
      <li>
        {props.id}
        {props.name}
        {props.placeNumber}
      </li>
    </>
  );
};

export default User;
