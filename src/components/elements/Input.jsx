import { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../utils/validators";

const Input = (props) => {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, props.validators),
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
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  return (
    <>
      <label className="label" htmlFor={props.id}>{props.label}</label>
      <input
        className="input"
        id={props.id}
        type={props.type || "text"}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
      {!isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </>
  );
};

export default Input;
