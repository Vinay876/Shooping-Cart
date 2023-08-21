const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];
// we will create function inside the reducer so we can able to change state

// REDUCER
// reducers are the functions which helps in to mutate our state reducers are the pure function .pure function means those functions which dosnt have any side effect

// ACTION

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

// here state is an emty arry which is declared upword as an initialState

// REdux says that we cant directly mutate our state as we doing here but here we can mute state becoz we were using createSlice functionality which alows us to mutate our state

// REMOVE
// whenever we will remove a item we will give a id as an action.payload and then state will return all those item ids which are note equal to action.payload

// previously in redux we have to create both reducers and actions but in this react tootlkit we have createSlice method which provides us a both actions and reducersss
