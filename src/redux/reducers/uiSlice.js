import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSideBarSmall: false,
  selectedTab: "Dashboard",
  screenSize: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
};

const uiSlice = createSlice({
  name: "ui", // Name for your slice
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSideBarSmall(state, action) {

      console.log(action.payload ,"rfefefef")
      state.isSideBarSmall = action.payload;
    },
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
    setScreenSize(state) {
      state.screenSize = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    },
  },
});

export const { setLoading, setSideBarSmall, setSelectedTab, setScreenSize } =
  uiSlice.actions;
export default uiSlice.reducer;

// Add event listener (consider using a custom hook for this logic)
// window.addEventListener("resize", () => {
//     store.dispatch(updateScreenSize());
//   });
