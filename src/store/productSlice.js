// here we call a asyncronous function of data and store that data in redux store but it was not an gud practise

// we define status overhere which means which is the current status of our api call

//ager hm chahte hai ki koi bhr se hamre object ki properties ke sath checd chad na kr paye to uske liye hm object freez ke denge

// we cant make a async function inside a reducer

// reducer me function syncronusly call hote hai aur uska koi side effect nahi hota

// ===>>> THUNKS

//thunks is a middle ware inside a redux .it return a async function inside a function

// COPIED

const { createSlice } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
