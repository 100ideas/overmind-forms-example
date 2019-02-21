import { parallel, action } from "overmind";

export const showStateJson = ({ state }) => {
  state.showStateJson = !state.showStateJson;
};
