import { createStore } from "redux";

export interface RootState {
  femaleTemperature: number | null;
  maleTemperature: number | null;
  gender: "female" | "male" | null;
}

interface SetFemaleTemperatureAction {
  type: "SET_FEMALE_TEMPERATURE";
  payload: number;
}

interface SetMaleTemperatureAction {
  type: "SET_MALE_TEMPERATURE";
  payload: number;
}

interface SetGenderAction {
  type: "SET_GENDER";
  payload: "female" | "male";
}

export const setFemaleTemperature = (
  temperature: number
): SetFemaleTemperatureAction => {
  return {
    type: "SET_FEMALE_TEMPERATURE",
    payload: temperature,
  };
};

export const setMaleTemperature = (
  temperature: number
): SetMaleTemperatureAction => {
  return {
    type: "SET_MALE_TEMPERATURE",
    payload: temperature,
  };
};

export const setGender = (gender: "female" | "male"): SetGenderAction => {
  return {
    type: "SET_GENDER",
    payload: gender,
  };
};

const initialState: RootState = {
  femaleTemperature: 50,
  maleTemperature: 50,
  gender: "male",
};

const reducer = (
  state: RootState = initialState,
  action:
    | SetFemaleTemperatureAction
    | SetMaleTemperatureAction
    | SetGenderAction
): RootState => {
  switch (action.type) {
    case "SET_FEMALE_TEMPERATURE":
      console.log("state: ", action.payload);
      return {
        ...state,
        femaleTemperature: action.payload,
      };
    case "SET_MALE_TEMPERATURE":
      console.log("state: ", action.payload);
      return {
        ...state,
        maleTemperature: action.payload,
      };
    case "SET_GENDER":
      console.log("state: ", action.payload);
      return {
        ...state,
        gender: action.payload,
      };
    default:
      return state;
  }
};

const temperatureStore = createStore(reducer);

export default temperatureStore;
