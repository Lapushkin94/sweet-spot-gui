import { useParams } from "react-router-dom";
import PlacesList from "../places/PlacesList";
import placeTest1 from "../../utils/places-test/collective-test1.jpg";

const PLACES = [
  {
    id: "1",
    image: placeTest1,
    title: "collective1",
    address: "some street1",
    description: "some desc1",
    creatorId: "1",
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    id: "2",
    image: placeTest1,
    title: "collective2",
    address: "some street2",
    description: "some desc2",
    creatorId: "2",
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    id: "3",
    image: placeTest1,
    title: "collective3",
    address: "some street3",
    description: "some desc3",
    creatorId: "1",
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
];

const UserPlaces = () => {
  // TODO: get places according to a user id from db
  const userId = useParams().userId;
  const filteredPlaces = PLACES.filter((place) => place.creatorId === userId);

  return <PlacesList items={filteredPlaces} />;
};

export default UserPlaces;
