import React from "react";
import { useOvermind } from "../overmind";
// import Users from "./Users";
import LoginForm from "./LoginForm";

import JSONfn from "../util";

const App = () => {
  const { state } = useOvermind();

  return (
    <div className="container">
      <div className="subhead">
        <h3>
          <a href="https://github.com/garth/overmind-forms">
            @garth/overmind-forms
          </a>{" "}
          demo
        </h3>
      </div>

      <nav className="mainnav">
        <h3>
          <a href="/">Home</a>
        </h3>
        <h3>
          <a href="/users">Users</a>
        </h3>
        <hr />
        {/* state.currentPage === "users" ? <Users /> : null */}
      </nav>

      <div className="content">
        {state.currentPage === "home" ? (
          <h1 className="subhead">Hello world!</h1>
        ) : null}
        <LoginForm />
      </div>

      <div className="quote">
        {/* TODO use state.showStateJson to show/hide this */}
        <h3>state:</h3>
        <pre>{JSONfn(state)}</pre>
      </div>
    </div>
  );
};

export default App;
