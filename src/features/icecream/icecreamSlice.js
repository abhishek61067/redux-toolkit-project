import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

// initializing state
const initialState = {
  numofIcecreams: 10,
};

// creating slice
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      // directly mutating or updating the state
      // In abstraction, immer is used to maintain immutablity of the initial state while mutating the state
      state.numofIcecreams--;
    },
    restocked: (state, action) => {
      state.numofIcecreams += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numofIcecreams--;
    });
  },
});

//root reducer generated by createSlice()
const icecreamRootReducer = icecreamSlice.reducer;
export default icecreamRootReducer;

export const { ordered, restocked } = icecreamSlice.actions;
