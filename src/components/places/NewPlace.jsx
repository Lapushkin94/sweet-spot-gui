import "./PlaceForm.css";
import Input from "../elements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import Button from "../elements/Button";
import Textarea from "../elements/Textarea";
import useForm from "../hooks/form-hook";

const NewPlace = () => {
  const [inputState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
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
      />
      <Textarea
        id="description"
        rows={3}
        label="Place description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
        errorText="invalid input"
        onInput={inputHandler}
      />
      <Input
        id="address"
        label="Place address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="invalid input"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!inputState.isValid}>
        Add place
      </Button>
    </form>
  );
};

export default NewPlace;
