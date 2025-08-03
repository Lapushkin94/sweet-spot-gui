import "./Authentication.css";
import Input from "../elements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from "../../utils/validators";
import useForm from "../hooks/form-hook";
import Button from "../elements/Button";
import Card from "../elements/Card";
import { useState, useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

const Authentication = () => {
const auth = useContext(AuthContext);

  const [inputState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const [isLoginMode, setIsLoginMode] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputState.inputs);
    auth.login();
  };

  const switchHandler = () => {
    if (isLoginMode) {
      setFormData({
        ...inputState.inputs,
        name: undefined,
      }, inputState.inputs.email.isValid && inputState.inputs.password.isValid);
    } else {
      setFormData({
        ...inputState.inputs,
        name: {
          value: "",
          isValid: false,
        },
      }, inputState.inputs.email.isValid && inputState.inputs.password.isValid);
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="auth-form">
      <h1>{isLoginMode ? "Login" : "Signup"}</h1>
      <hr />
      <form onSubmit={submitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            label="Name"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="invalid input"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          label="Email"
          type="email"
          validators={[
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(3),
            VALIDATOR_EMAIL(),
          ]}
          errorText="invalid input"
          onInput={inputHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          validators={[
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(3),
            VALIDATOR_MAXLENGTH(10),
          ]}
          errorText="invalid input"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!inputState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Authentication;
