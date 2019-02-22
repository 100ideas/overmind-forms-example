import { parallel, action } from "overmind";
import { jsonata } from "jsonata";

// not currently in use
export const checkValidationError = state => {
  let errors = jsonata("**[isValid=false]").evaluate(state.loginForm);
};
