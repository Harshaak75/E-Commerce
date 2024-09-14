import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items:[],
    totalQuantity:0,
    totalAmount:0,
    // user: null,
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart: (state, actions) =>{
            const newItem = actions.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    category:newItem.category,
                    img:newItem.image,
                    title:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:Number(newItem.price),
                })
            }
            else{
                existingItem.quantity++;
                // existingItem.totalPrice = existingItem.price * existingItem.quantity;
                existingItem.totalPrice += Number(newItem.price);
            }

            state.totalAmount += Number(newItem.price);
        },

        removefromCart: (state,actions)=>{
            const id = actions.payload;

            // Find the existing product in the cart
            const existingProduct = state.items.find(item => item.id === id);
        
            if (existingProduct) {
                // Decrease the total quantity and total amount
                state.totalQuantity--;
                state.totalAmount -= Number(existingProduct.price);
        
                if (existingProduct.quantity === 1) {
                    // Remove the product if its quantity reaches zero
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    // Decrease the quantity of the existing product
                    existingProduct.quantity--;
                    existingProduct.totalPrice -= Number(existingProduct.price);
                }
            }
        },
        clearCart: (state) =>{
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }

    }
})

export const {addtoCart, removefromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;