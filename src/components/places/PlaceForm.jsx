import "./PlaceForm.css";
import Input from "../UIElements/Input";
import { VALIDATOR_REQUIRE } from "../../utils/validators";

const PlaceForm = () => {
  return (
    <form className="place-form">
      <Input
        id="title"
        label="test label"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="invalid input"
      />
    </form>
  );
};

export default PlaceForm;
