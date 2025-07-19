import { useReducer } from "react";
import "./Input.css";
import { validate } from "../../utils/validators";

const Input = (props) => {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
        };
      case "TOUCH":
        return {
          ...state,
          isTouched: true,
        };
      default:
        return state;
    }
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const isValid = validate(inputState.value, props.validators);

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
      {!isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </>
  );
};

export default Input;
