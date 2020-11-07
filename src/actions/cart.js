import {DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTAL, GET_AMOUNT} from './type'

export const remove = (id) => dispatch => {
  dispatch({type: REMOVE, payload: {id} })
}

export const increase = (id) => dispatch => {
  dispatch({type: INCREASE, payload: {id} })
}

export const decrease = (id, amount) => dispatch => {
  dispatch({type: DECREASE, payload: {id, amount} })
}


export const clearCart = () => dispatch => {
  dispatch({type: CLEAR_CART })
}

export const getTotals = () => dispatch => {
  dispatch({type: GET_TOTAL })
}