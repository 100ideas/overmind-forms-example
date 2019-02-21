import { Overmind } from "overmind";
import { merge, namespaced } from "overmind/config";
import { createHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

import * as loginForm from "./login";
import form from "overmind-forms/module";

const onInitialize = ({ actions, effects }) => {
  // add initialization code here...
  //
  // console.dir("onInitialized({actions}):", actions);
};

const formConfig = namespaced({
  loginForm,
  form
});

const config = merge(
  {
    onInitialize,
    state,
    actions,
    effects
  },
  formConfig
);

console.dir("config:", config);

const overmind = new Overmind(config);

export const useOvermind = createHook(overmind);
