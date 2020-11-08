import {
  DECREASE,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../actions/type'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  const { type, productId } = action
  switch (type) {
    case ADD_TO_CART:
      if (state.indexOf(productId) !== -1) {
        return state
      }
      return [ ...state, productId ]
    case REMOVE_FROM_CART: 
      return state.filter(id => id !== productId)

    case DECREASE:
      if (action.quantity === 1) {
        return state.filter(id => id !== productId)
      } else {
        return state
      }


    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { type, productId } = action

  switch (type) {
    case ADD_TO_CART:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }

    case REMOVE_FROM_CART: 
      const cloneState = {...state}
      delete cloneState[productId];

      return cloneState

    case DECREASE:
      if (action.quantity === 1) {
        const cloneState = {...state}
        delete cloneState[productId];
  
        return cloneState
      } else {
        return { ...state,
          [productId]: (state[productId] || 0) - 1
        }
      }

    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart

// https://github.com/reduxjs/redux/tree/master/examples/shopping-cart/src