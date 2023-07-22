import { legacy_createStore as createStore } from "redux";

export interface RootState {
  temperature: number | null;
}

interface SetTemperatureAction {
  type: "SET_TEMPERATURE";
  payload: number;
}

export const setTemperature = (temperature: number): SetTemperatureAction => {
  return {
    type: "SET_TEMPERATURE",
    payload: temperature,
  };
};

const reducer = (
  state: RootState = { temperature: null },
  action: SetTemperatureAction
): RootState => {
  switch (action.type) {
    case "SET_TEMPERATURE":
      console.log(`Temperate: ${action.payload}`);
      return {
        ...state,
        temperature: action.payload,
      };
    default:
      return state;
  }
};

const temperatureStore = createStore(reducer);

export default temperatureStore;
