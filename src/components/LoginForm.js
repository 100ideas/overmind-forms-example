// import React from 'react'
// import { connect, Connect } from '../../app'
import React from "react";
import { useOvermind } from "../overmind";

const LoginForm = () => {
  const { state, actions } = useOvermind();

  // {
  //   "currentPage": "home",
  //    "isLoadingUsers": false,
  //    "isLoadingUserDetails": false,
  //    "users": [],
  //    "login": {
  //       "isValid": false,
  //       "email": {
  //         "value": "",
  //         "isPristine": true,
  //          "isValid": true,
  //          "showError": false
  //        },
  //        "password": {
  //           "value": "",
  //           "isPristine": true,
  //           "isValid": false,
  //           "showError": false
  //         }
  //       }
  // }

  return (
    // <pre>{JSON.stringify(state, null, 2)}</pre>
    <div className="modal">
      <h3>garth/overmind-form</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          // e.stopPropagation();
          // console.dir("onSubmit e:", e.target);
          actions.loginForm.FormSubmitted();
        }}
      >
        <input
          className={state.loginForm.email.showError ? "error" : ""}
          value={state.loginForm.email.value}
          onChange={e =>
            actions.form.setField({
              field: state.loginForm.email,
              value: e.target.value
            })
          }
        />
        <input
          className={state.loginForm.password.showError ? "error" : ""}
          value={state.loginForm.password.value}
          type="password"
          onChange={e =>
            actions.form.setField({
              field: state.loginForm.password,
              value: e.target.value
            })
          }
        />
        <input
          className={state.loginForm.field3.showError ? "error" : ""}
          value={state.loginForm.field3.value}
          onChange={e =>
            actions.form.setField({
              field: state.loginForm.field3,
              value: e.target.value
            })
          }
        />
        <button
          type="submit"
          onClick={e => {
            // e.preventDefault();
          }}
          disabled={!!!state.loginForm.isValid}
        >
          {state.loginForm.isValid ? "submit!" : "form errors :("}
        </button>
        <pre>{JSON.stringify(state.loginForm.isValid)}</pre>
      </form>
    </div>
  );
};

export default LoginForm;
