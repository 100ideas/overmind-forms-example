import form from "overmind-forms";
import validator from "./validator";

// hacked in validation logic from
// https://github.com/garth/state-forms/blob/master/src/utils/validate.js
// TODO switch to garth/state-forms?
export const state = form({
  email: {
    value: "",
    isValid: val => validator(val, ["minLength:3", "isEmail"])
  },
  password: {
    value: "",
    isValid: val => validator(val, ["minLength:4", "isAlphanumeric"])
  },
  field3: {
    value: "tell us about yourself...",
    isValid: val => validator(val, ["isWords", "minLength:3"])
  }
});

console.dir("initFormState", state);
/*

*/
