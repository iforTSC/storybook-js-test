
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultButtons = [
  { id: '1', label: 'Default'},
];
const ButtonData = {
  buttons: defaultButtons,
  status: 'idle',
  error: null,
};

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const ButtonsSlice = createSlice({
  name: 'buttonbox',
  initialState: ButtonData,
  reducers: {
    updatebuttonState: (state, action) => {
      const { id, newButtonState } = action.payload;
      const button = state.buttons.findIndex((button) => button.id === id);
      if (button >= 0) {
        state.buttons[button].state = newButtonState;
        alert(newButtonState)
      }
    },
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateButtonState } = ButtonsSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    buttonbox: ButtonsSlice.reducer,
  },
});

export default store;