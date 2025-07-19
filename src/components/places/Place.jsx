import { useState } from "react";

import Card from "../UIElements/Card";
import Button from "../UIElements/Button";
import Modal from "../UIElements/Modal";
import Map from "./Map";

import "./Place.css";

const Place = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-card"
        footerClass="place-buttons"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      <li className="place-item">
        <Card className="place-card">
          <div className="place-image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-buttons">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default Place;
