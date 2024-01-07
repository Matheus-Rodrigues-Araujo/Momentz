import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const postVisibilitySlice = createSlice({
  name: "postVisibility",
  initialState: false,
  reducers: {
    setPostVisibility: (state, action: PayloadAction<true | false>) => {
      return action.payload;
    },
  },
});

export const { setPostVisibility } = postVisibilitySlice.actions;
export default postVisibilitySlice.reducer;
