// import { parallel, action } from "overmind";

import { formToJSON, getFormFields, getInvalidFormFields } from "./helpers";
import { jsonata } from "jsonata";

// const checkValidationError = (form) => {
//   let errors = jsonata('**[isValid=false]').evaluate(state.loginForm)
// }

export const FormSubmitted = ({ state }) => {
  if (!state.loginForm.isValid) {
    state.formSubmission = "form invalid";
    return false;
  }

  let errors = Object.keys(getInvalidFormFields(state.loginForm)).reduce(
    (invalidFields, key) => {
      if (state.loginForm[key].isPristine) {
        invalidFields[key] = {
          ...state.loginForm[key].isValid,
          isPristine: true,
          isValid: false
        };
      } else if (state.loginForm[key].isValid.isValid === false) {
        invalidFields[key] = state.loginForm[key].isValid;
      }
      return invalidFields;
    },
    {}
  );

  let user = {
    id: state.users.length + 1,
    name: state.loginForm.email.value,
    bio: state.loginForm.field3.value
  };

  // object hashmap style
  // user = { [user.id]: user }

  state.formSubmission = {
    ...formToJSON(getFormFields(state.loginForm)),
    errors
  };

  // TODO
  // actions.resetForm(getFormId)

  state.users = [...state.users, user];
};
