import { parallel, action } from "overmind";
import { jsonata } from 'jsonata'

export const checkValidationError = (form) => {
  let errors = jsonata('**[isValid=false]').evaluate(state.loginForm)

}