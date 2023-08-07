import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RootState {
  femaleTemperature: number | null;
  maleTemperature: number | null;
  gender: "female" | "male" | null;
  stage: number; // 새로운 상태: 단계(스테이지)
}

const initialState: RootState = {
  femaleTemperature: 50,
  maleTemperature: 50,
  gender: "male",
  stage: 1, // 초기 단계(스테이지) 설정
};

const priorInfoSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    setFemaleTemperature(state, action: PayloadAction<number>) {
      state.femaleTemperature = action.payload;
    },
    setMaleTemperature(state, action: PayloadAction<number>) {
      state.maleTemperature = action.payload;
    },
    setGender(state, action: PayloadAction<"female" | "male">) {
      state.gender = action.payload;
    },
    setStage(state, action: PayloadAction<number>) {
      state.stage = action.payload;
    }, // 새로운 액션: setStage
  },
});

export const {
  setFemaleTemperature,
  setMaleTemperature,
  setGender,
  setStage, // 새로운 액션: setStage
} = priorInfoSlice.actions;

const priorInfoStore = configureStore({
  reducer: priorInfoSlice.reducer,
});

export default priorInfoStore;
