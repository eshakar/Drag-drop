import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [], 
  history: [],
  historyIndex: -1,
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
      state.history = [...state.history.slice(0, state.historyIndex + 1), [...state.elements]];
      state.historyIndex += 1;
    },
    updateElement: (state, action) => {
      const { id, props } = action.payload;
      const index = state.elements.findIndex((el) => el.id === id);
      if (index !== -1) {
        state.elements[index].props = { ...state.elements[index].props, ...props };
        state.history = [...state.history.slice(0, state.historyIndex + 1), [...state.elements]];
        state.historyIndex += 1;
      }
    },
    undo: (state) => {
      if (state.historyIndex > 0) {
        state.historyIndex -= 1;
        state.elements = [...state.history[state.historyIndex]];
      }
    },
    redo: (state) => {
      if (state.historyIndex < state.history.length - 1) {
        state.historyIndex += 1;
        state.elements = [...state.history[state.historyIndex]];
      }
    },
  },
});

export const { addElement, updateElement, undo, redo } = canvasSlice.actions;
export default canvasSlice.reducer;