import Card from "../elements/Card";
import Place from "./Place";
import "./PlacesList.css";

const PlacesList = (props) => {
  if (!props.items || props.items.length === 0) {
    return (
      <div className="no-places">
        <Card>
          <h2>No places found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="places-list">
      {props.items.map((place) => (
        <Place
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          address={place.address}
          description={place.description}
          creatorId={place.creatorId}
          coordinates={place.coordinates}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
