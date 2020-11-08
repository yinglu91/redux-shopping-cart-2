import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getTotalItems, getTotal, getCartProducts } from '../reducers'
import { checkout } from '../actions'
import CartItem from './CartItem'

const Cart  = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const products = useSelector(state => getCartProducts(state))
  const total = useSelector(state => getTotal(state))
  const totalItems = useSelector(state => getTotalItems(state))

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
     
      <article>
        {products.length == 0 && <em>Please add some products to cart.</em>}

        {products.length > 0 && products.map(item => {
            return <CartItem key={item.id} {...item} />;
          })}
      </article>
     
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
          Total Price <span>&#36;{total}</span>
          </h4>
        </div>

        <button className="btn clear-btn" onClick={() => history.push('/products')}
          >Continue Shopping</button> {'  '}

        <button className="btn clear-btn" onClick={() => dispatch(checkout())}
          disabled={totalItems > 0 ? '' : 'disabled'}
          title={totalItems > 0 ? 'Check Out' : 'disabled'}>check out</button>

      </footer>
    </section>
  )
}

export default Cart

{/* <button onClick={() => dispatch(checkout(products))}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button> */}
