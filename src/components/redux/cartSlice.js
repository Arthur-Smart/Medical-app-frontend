import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  quantity:0,
  total:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct:(state,action)=>{
            state.products.push(action.payload)
            state.total +=action.payload.cost * action.payload.qty;
            state.quantity +=1;
        } 
  },
});

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer