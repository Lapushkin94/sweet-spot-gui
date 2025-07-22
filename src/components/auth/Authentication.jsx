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

const Authentication = () => {
  const [inputState, inputHandler] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputState.inputs);
  };

  return (
    <form className="auth-form" onSubmit={submitHandler}>
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
        LOGIN
      </Button>
    </form>
  );
};

export default Authentication;
