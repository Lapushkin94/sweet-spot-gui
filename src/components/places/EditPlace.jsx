import "./PlaceForm.css";
import Input from "../UIElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import Button from "../UIElements/Button";
import Textarea from "../UIElements/Textarea";
import useForm from "../../utils/hooks/form-hook";
import { useParams } from "react-router-dom";
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

const EditPlace = () => {
  const placeId = useParams().placeId;
  const placeToEdit = PLACES.find((p) => p.id === placeId);

  const [inputState, inputHandler] = useForm(
    {
      title: {
        value: placeToEdit.title,
        isValid: true,
      },
      description: {
        value: placeToEdit.description,
        isValid: true,
      },
      address: {
        value: placeToEdit.address,
        isValid: true,
      },
    },
    true
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputState.inputs);
  };

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        label="Place title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="invalid input"
        onInput={inputHandler}
        initialValue={placeToEdit.title}
        initialValid={true}
      />
      <Textarea
        id="description"
        rows={3}
        label="Place description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
        errorText="invalid input"
        onInput={inputHandler}
        initialValue={placeToEdit.description}
        initialValid={true}
      />
      <Input
        id="address"
        label="Place address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="invalid input"
        onInput={inputHandler}
        initialValue={placeToEdit.address}
        initialValid={true}
      />
      <Button type="submit" disabled={!inputState.isValid}>
        Edit place
      </Button>
    </form>
  );
};

export default EditPlace;
