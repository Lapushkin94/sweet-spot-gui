const Place = (props) => {
  const { id, image, title, address, description, creatorId, coordinates } = props;
  return (
    <li>
      {id}
      {image}
      {title}
      {address}
      {description}
      {creatorId}
      {coordinates.lat}
      {coordinates.lng}
    </li>
  );
};

export default Place;
