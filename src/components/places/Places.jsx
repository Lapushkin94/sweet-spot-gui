import PlacesList from "./PlacesList";

const Places = () => {

    // TODO: db call to get all places
  const PLACES = [
    {
      id: "1",
      image: "img",
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
      image: "img",
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
        image: "img",
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

  return <PlacesList items={PLACES} />;
};

export default Places;
