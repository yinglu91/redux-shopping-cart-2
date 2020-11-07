import {DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTAL, GET_AMOUNT} from '../actions/type'

// items
import cartItems from "../constants/cart-items";

const initialState = {
  cart: cartItems,
  total: 105,
  amount: 5
};

const cartReducer = (state = initialState, action) => {
  console.log(state, action)

  const {type, payload} = action
  

  switch (type) {
    case CLEAR_CART: // payload: null
      return {...state, cart: []}
    
    case DECREASE:  // payload: {amount: #, id: ##}
      if (payload.amount === 1) { // remove this item
        const tempCart2 = state.cart.filter(cartItem => cartItem.id !== payload.id)
        return { ...state, cart: tempCart2 }
      }

      const tempCart1 = state.cart.map(cartItem => {
          if (cartItem.id === payload.id) {
            cartItem = {...cartItem, amount: cartItem.amount -1};
          }

          return cartItem;
        });

      return { ...state, cart: tempCart1 }

    case INCREASE: // payload: {id: ##}
      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount + 1}
        }

        return cartItem
      })

      return { ...state, cart: tempCart }

    case REMOVE: // payload: {id: ##}
      return {
        ...state, 
        cart: state.cart.filter(cartItem => cartItem.id !== payload.id)
      }

    case GET_TOTAL:
      let {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
        const {price, amount} = cartItem

        cartTotal.total += price * amount
        cartTotal.amount += amount

        return cartTotal;
      }, {total: 0, amount: 0})

      total = parseFloat(total.toFixed(2))

      return {...state, total, amount}

    default:
      return state
  }
}

export default cartReducer
