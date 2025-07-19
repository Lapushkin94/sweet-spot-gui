import "./PlaceForm.css";
import Input from "../UIElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { useReducer, useCallback } from "react";
import Button from "../UIElements/Button";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const PlaceForm = () => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

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
      <Input
        id="description"
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

export default PlaceForm;
