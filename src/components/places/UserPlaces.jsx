import { useParams } from "react-router-dom";
import PlacesList from "../places/PlacesList";
import placeTest1 from "../../utils/places-test/collective-test1.jpg";
import placeTest2 from "../../utils/places-test/asya-test-1.jpg";

const PLACES = [
  {
    id: "1",
    image: placeTest1,
    title: "collective1",
    address: "some street1",
    description: "some desc1",
    creatorId: "1",
    coordinates: {
      lat: 40.5493713,
      lng: 23.0190911,
    },
  },
  {
    id: "2",
    image: placeTest1,
    title: "marrrr",
    address: "marrrr street",
    description: "marrrr description",
    creatorId: "2",
    coordinates: {
      lat: 40.64015790456649,
      lng: 22.948205906138483,
    },
  },
  {
    id: "3",
    image: placeTest2,
    title: "Asya asya",
    address: "asetrina street",
    description: "asya description",
    creatorId: "1",
    coordinates: {
      lat: 40.6345441,
      lng: 22.9522438,
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
