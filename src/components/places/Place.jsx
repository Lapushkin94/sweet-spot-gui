import { useState } from "react";

import Card from "../elements/Card";
import Button from "../elements/Button";
import Modal from "../elements/Modal";
import Map from "./Map";

import "./Place.css";

const Place = (props) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openDeleteConfirmHandler = () => setShowDeleteConfirm(true);

  const closeDeleteConfirmHandler = () => setShowDeleteConfirm(false);

  const deletePlaceHandler = () => {
    setShowDeleteConfirm(false);
    console.log("Deleting...");
  };

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
      <Modal
        show={showDeleteConfirm}
        onCancel={closeDeleteConfirmHandler}
        header="Are you sure?"
        footerClass="place-buttons"
        footer={
          <>
            <Button inverse onClick={closeDeleteConfirmHandler}>
              CANCEL
            </Button>
            <Button danger onClick={deletePlaceHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p className="place-item__modal-content">Delete place?</p>
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
            <Button to={`/places/edit/${props.id}`}>EDIT</Button>
            <Button danger onClick={openDeleteConfirmHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default Place;
