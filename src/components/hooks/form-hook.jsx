import { useReducer, useCallback } from "react";

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
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

const useForm = (initInputs, initFormValidity) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    inputs: initInputs || {},
    isValid: initFormValidity || false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [inputState, inputHandler, setFormData];
};

export default useForm;
